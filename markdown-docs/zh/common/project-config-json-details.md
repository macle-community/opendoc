# project.config.json详情

## 概述

`project.config.json`是DSL和H5小程序的项目配置文件，位于项目根目录。该文件记录了小程序的ID、名称、编译类型等重要信息，是Macle开发工具识别DSL小程序项目类型的关键文件。

## 作用

1. **项目标识**: 唯一标识小程序项目
2. **编译配置**: 定义项目的编译选项和构建行为
3. **工具识别**: 是Macle开发工具识别DSL小程序的核心依据
4. **团队共享**: 便于团队成员共享项目配置

## 配置参数

### 基础参数

| 参数名 | 类型 | 必需 | 默认值 | 说明 |
|--------|------|------|--------|------|
| projectname | string | 是 | - | 项目名称 |
| appid | string | 是 | - | 小程序的唯一标识ID |
| description | string | 否 | - | 项目描述信息 |
| compileType | string | 否 | "miniprogram" | 编译类型 |

### setting对象

编译设置选项，控制编译时的行为。

| 参数名 | 类型 | 必需 | 默认值 | 说明 |
|--------|------|------|--------|------|
| urlCheck | boolean | 否 | true | 是否检查安全域名 |
| es5 | boolean | 否 | true | 是否开启ES5转ES6 |
| es6 | boolean | 否 | true | 是否保留ES6语法 |
| postcss | boolean | 否 | true | 是否启用PostCSS |
| minified | boolean | 否 | true | 是否压缩代码 |
| newFeature | boolean | 否 | false | 是否启用新特性 |
| packNpmManually | boolean | 否 | false | 是否手动打包npm |
| packNpmRelationList | array | 否 | [] | npm包配置列表 |

### packOptions对象

打包选项配置。

| 参数名 | 类型 | 必需 | 默认值 | 说明 |
|--------|------|------|--------|------|
| ignore | array | 否 | [] | 忽略打包的文件或目录 |

### 其他参数

| 参数名 | 类型 | 必需 | 默认值 | 说明 |
|--------|------|------|--------|------|
| libVersion | string | 否 | - | 基础库版本号 |
| isGameTourist | boolean | 否 | false | 是否为游戏游客 |
| simulatorType | string | 否 | - | 模拟器类型 |
| simulatorPluginLibVersion | object | 否 | {} | 模拟器插件版本 |
| condition | object | 否 | - | 条件编译配置 |
| miniprogramRoot | string | 否 | "./" | 小程序根目录 |

## 参数详细说明

### compileType

编译类型，指定小程序的编译模式：

| 值 | 说明 |
|----|------|
| miniprogram | 普通小程序模式 |
| game | 游戏小程序模式 |
| plugin | 插件模式 |

### setting.urlCheck

是否检查安全域名。开启后，请求的域名必须在微信公众平台配置的安全域名列表中。

### setting.es5

是否将ES6语法转换为ES5。建议保持开启以兼容低版本设备。

### setting.postcss

是否启用PostCSS进行CSS处理，包括自动添加前缀等。

### setting.minified

是否压缩代码。发布时建议开启，开发时可关闭便于调试。

### setting.newFeature

是否启用新特性功能。

### condition

条件编译配置，用于指定启动参数：

- **search**: 搜索场景
- **conversation**: 会话场景
- **plugin**: 插件场景
- **game**: 游戏场景
- **miniprogram**: 小程序场景

## 注意事项

1. **appid**: 必须填写有效的小程序AppID，可以从Macle开发者平台获取
2. **projectname**: 项目名称，不能包含特殊字符（\ / : * ? % & @ # . " ~ < > |）
3. **文件位置**: 必须放在项目根目录
4. **团队共享**: 建议将此文件加入版本控制，团队成员共享配置

## 配置示例

### 基础配置

```json
{
  "description": "project config file",
  "appid": "300s00i1gea41p020105a1gd5n16",
  "compileType": "miniprogram",
  "projectname": "pctest",
  "setting": {
    "es5": true
  }
}
```

## 相关文档

- [DSL小程序开发指导](../DSL/DSL-Minicprogram-Development-Guide.md)
- [app.json详情](./app-json-details.md)
- [sitemap.json详情](./sitemap-json-details.md)