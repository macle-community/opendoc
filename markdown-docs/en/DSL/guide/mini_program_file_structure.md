## File structure

> The mini program is divided into two layers: app and page. The app is used to describe the entire application, the page is used to describe each page, and there is also a configuration description for the entire project (optional).

The app consists of three files, which must be placed in the root directory of the project

| File       | Required | Purpose       |
|:---------|:---|:---------|
| app.js   | Yes  | Mini program logic    |
| app.json | Yes  | Mini program global settings  |
| app.mass | No  | Mini program global style sheet |
| project.config.json | Yes  | Configuration file for the development tool (for details, refer to `src\agent\skills\generate-mini-app\platform\common\project-config-json-guide.md`) |

The page consists of four files, which are:

| File type | Required | Purpose    |
|:-----|:---|:------|
| js   | Yes  | Page logic  |
| maml | Yes  | Page structure  |
| mass | No  | Page style sheet |
| json | No  | Page configuration  |

**| Note**: For the convenience of developers, macle mini programs require that these four files have the same path and file name.

### Directory structure
The simplest directory structure of a mini program is as follows:
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

## Files allowed to be packaged

In the project directory, the following files will be compiled, so they cannot be accessed directly after packaging: .js, app.json, _.maml, _.mass, \*.sjs, \*.sk. In addition, only files with suffixes in the whitelist can be packaged into the mini program package. The specific whitelist is as follows:



| File format  | Description             |
|-------|----------------|
| html  | html page         |
| js    | javascript resource file |
| json  | json configuration file       |
| css   | page style file         |
| png   | lossless compressed image file       |
| jpg   | lossy compressed image file       |
| gif   | animated image file          |
| ttf   | general font file         |
| woff  | web font file        |
| eot   | embedded font file        |
| ico   | icon file           |
| txt   | text             |
| mp3   | general compressed audio file       |
| ogg   | lossy compressed audio file       |
| wav   | lossless audio file         |
| md    | markdown file     |
| mp4   | video file           |
| xml   | xml configuration file        |
| fetch | Macle data prefetch configuration file  |



### MAML

MAML (Macle Markup Language) is a set of tag languages designed by the framework. Combined with basic components and an event system, it can build the structure of a page.

### MASS

MASS (Macle Style Sheets) is a set of style languages used to describe the component styles of MAML.

### SJS

SJS (safe/subset javascript) is a set of custom scripting languages for mini programs. It can be used in MAML to build page structures.

## Subpackage loading

In some cases, developers need to divide the mini program into different subpackages, which are packaged into different subpackages during construction, and users load them on demand when using them.

When constructing a mini program subpackage project, the build will output one or more subpackages. Each mini program using subpackages must contain a main package. The so-called main package is the one that places the default startup page / TabBar page, as well as some public resources / JS scripts needed by all subpackages; while the subpackages are divided according to the developer's configuration.

When the mini program starts, the main package is downloaded by default and the pages in the main package are started. When the user enters a page in a subpackage, the client will download the corresponding subpackage, and display it after the download is complete.

Dividing the mini program into subpackages can optimize the download time of the first launch of the mini program, and can better decouple and collaborate when multiple teams develop together.

### Using subpackages

#### Configuration method

Assume the directory structure of the mini program supporting subpackages is as follows:

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

Developers declare the project subpackage structure through the app.json subPackages field:

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

In subPackages, the configuration properties of each subpackage are as follows:

| Field  | Type           | Description                           |
| :---- | :------------- | :----------------------------- |
| root  | String         | Subpackage root directory                     |
| pages | Array\<String> | Subpackage page paths, relative to the subpackage root directory |

#### Packaging principles

- After declaring subPackages, packaging will be performed according to the subPackages configuration paths. Directories outside the subPackages configuration paths will be packaged into the main package
- The main package can also have its own pages (i.e. the outermost pages field)
- The root directory of subPackages cannot be a subdirectory within another subPackages
- tabBar pages must be within the main package

#### Reference principles

- packageA cannot require packageB JS files, but can require JS files in the main package and its own package
- packageA cannot import packageB templates, but can import templates in the main package and its own package
- packageA cannot use packageB resources, but can use resources in the main package and its own package

