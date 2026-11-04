## 文件结构

> 小程序分为 app 和 page 两层。app 用来描述整个应用，page 用来描述各个页面，此外还有关于整个 project 的配置描述（可选）。

app 由三个文件组成，必须放在项目的根目录

| 文件       | 必填 | 作用       |
|:---------|:---|:---------|
| app.js   | 是  | 小程序逻辑    |
| app.json | 是  | 小程序全局设置  |
| app.mass | 否  | 小程序全局样式表 |
| project.config.json | 是  | 开发工具的配置文件（详情参考`src\agent\skills\generate-mini-app\platform\common\project-config-json-guide.md`） |

page 由四个文件组成，分别是：

| 文件类型 | 必填 | 作用    |
|:-----|:---|:------|
| js   | 是  | 页面逻辑  |
| maml | 是  | 页面结构  |
| mass | 否  | 页面样式表 |
| json | 否  | 页面配置  |

**| 注意**： 为了方便开发者，macle 小程序规定这四个文件必须具有相同的路径与文件名。

### 目录结构
小程序最简单目录结构如下：
```
├── app.js
├── app.json
├── app.mass
├── project.config.json
├── pages
│   ├── index.js
│   └── index.json
│   └── index.maml
│   └── index.mass 
└── ...
```

## 允许打包的文件

在项目目录中，以下文件会经过编译，因此打包之后无法直接访问到：.js、app.json、_.maml、_.mass、\*.sjs、\*.sk。除此之外，只有后缀名在白名单内的文件可以打包到小程序包里。具体白名单列表如下：



| 文件格式  | 说明             |
|-------|----------------|
| html  | html页面         |
| js    | javascript资源文件 |
| json  | json配置文件       |
| css   | 页面样式文件         |
| png   | 无损压缩图片文件       |
| jpg   | 有损压缩图片文件       |
| gif   | 动态图文件          |
| ttf   | 通用字体文件         |
| woff  | web字体文件        |
| eot   | 嵌入式字体文件        |
| ico   | 图标文件           |
| txt   | 文本             |
| mp3   | 通用压缩音频文件       |
| ogg   | 有损压缩音频文件       |
| wav   | 无损音频文件         |
| md    | markdown文件     |
| mp4   | 视频文件           |
| xml   | xml配置文件        |
| fetch | Macle数据预取配置文件  |



### MAML

MAML（Macle Markup Language）是框架设计的一套标签语言，结合基础组件、事件系统，可以构建出页面的结构。

### MASS

MASS (Macle Style Sheets)是一套样式语言，用于描述 MAML 的组件样式。

### SJS

SJS（safe/subset javascript）是小程序一套自定义脚本语言，可以在 MAML 中使用其构建页面结构。

## 分包加载

某些情况下，开发者需要将小程序划分成不同的子包，在构建时打包成不同的分包，用户在使用时按需进行加载。

在构建小程序分包项目时，构建会输出一个或多个分包。每个使用分包小程序必定含有一个主包。所谓的主包，即放置默认启动页面/ TabBar 页面，以及一些所有分包都需用到公共资源/ JS 脚本；而分包则是根据开发者的配置进行划分。

在小程序启动时，默认会下载主包并启动主包内页面，当用户进入分包内某个页面时，客户端会把对应分包下载下来，下载完成后再进行展示。

对小程序进行分包，可以优化小程序首次启动的下载时间，以及在多团队共同开发时可以更好的解耦协作。

### 使用分包

#### 配置方法

假设支持分包的小程序目录结构如下：

```
├── app.js
├── app.json
├── app.mass
├── packageA
│   └── pages
│       ├── apple
│       └── banana
├── packageB
│   └── pages
│       ├── dog
│       └── cat
├── pages
│   ├── index
│   └── logs
└── utils
```

开发者通过在 app.json subPackages 字段声明项目分包结构：

```json
{
  "pages": ["pages/index", "pages/logs"],
  "subPackages": [
    {
      "root": "packageA",
      "pages": ["pages/apple", "pages/banana"]
    },
    {
      "root": "packageB",
      "pages": ["pages/cat", "pages/dog"]
    }
  ]
}
```

subPackages 中，每个分包的配置属性如下：

| 字段  | 类型           | 说明                           |
| :---- | :------------- | :----------------------------- |
| root  | String         | 分包根目录                     |
| pages | Array\<String> | 分包页面路径，相对与分包根目录 |

#### 打包原则

- 声明 subPackages 后，将按 subPackages 配置路径进行打包，subPackages 配置路径外的目录将被打包到 主包 中
- 主包 也可以有自己的 pages（即最外层的 pages 字段）
- subPackages 的根目录不能是另外一个 subPackages 内的子目录
- tabBar 页面必须在 主包 内

#### 引用原则

- packageA 无法 require packageB JS 文件，但可以 require 主包、自己 package 内的 JS 文件
- packageA 无法 import packageB 的 template，但可以 import 主包、自己 package 内的 template
- packageA 无法使用 packageB 的资源，但可以使用 主包、自己 package 内的资源

