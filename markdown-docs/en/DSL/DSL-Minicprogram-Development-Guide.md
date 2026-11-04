# DSL Mini Program Development Guide

> This file is the overview guide for DSL mini program development. A DSL mini program is a type of mini program supported by the Macle mini program development tool, developed using the platform's custom DSL (Domain Specific Language) syntax. Please read this file thoroughly before development, and consult the detailed documents referenced in each chapter as needed.

## 1. Architecture

The DSL mini program adopts a dual-thread model and is developed using three sets of custom languages provided by the platform:

- **MAML (Macle Markup Language)**: A template tag language that builds page structures combined with basic components and an event system. The file suffix is `.maml`
- **MASS (Macle Style Sheets)**: A style language used to describe MAML component styles. It has most of the features of CSS and extends the size unit `rpx`, style imports, etc. The file suffix is `.mass`
- **SJS (safe/subset javascript)**: A custom scripting language running on the rendering layer. It can be used in MAML to build page structures and respond to component events. The file suffix is `.sjs`
- **Logic layer**: Runs using a JavaScript engine, providing mini program specific APIs (`ma.*`). The code written by the developer will eventually be packaged into a single JS file that runs when the mini program starts

**Technical features**:

- The logic layer and the rendering layer are separated, communicating through data binding and the event system
- Data-driven views, supporting data binding, list rendering, and conditional rendering
- Supports component-based development and custom components
- Supports subpackage loading to optimize the first launch download time

---

## 2. Project directory structure

The root directory of a DSL mini program project must be the directory currently opened by vscode. Do not regenerate other folders as the root directory. The simplest directory structure is as follows:

```
/                           # The directory currently opened by vscode
├── project.config.json     # Project configuration file (required)
├── app.js                  # Mini program entry file (required)
├── app.json                # Global configuration file (required)
├── app.mass                # Global style file (optional)
├── sitemap.json            # Sitemap configuration file (required)
├── pages/                  # Page directory
│   └── index/
│       ├── index.js        # Page logic
│       ├── index.json      # Page configuration
│       ├── index.maml      # Page template
│       └── index.mass      # Page style
├── components/             # Custom component directory (optional)
├── utils/                  # Utility function directory (optional)
├── image/                  # Image resource directory (optional)
└── lib/                    # Third-party library directory (optional)
```

> **Important**: macle mini programs require that the four files of each page (`.js`, `.json`, `.maml`, `.mass`) must have the same path and file name.

> For the complete file structure, required file descriptions, subpackage loading, allowed packaging file formats, etc., see [File structure](./guide/mini_program_file_structure.md).

---

## 3. Configuration files

A DSL mini program project requires four files: `project.config.json`, `app.json`, `app.js`, and `sitemap.json`; `app.mass` is an optional global style file. The required status of each file is based on its detail document:

### 3.1 project.config.json (required)

The project configuration file in the project root directory, containing basic information such as project name, AppID, compilation type, etc. It is the key file for the Macle development tool to recognize the DSL mini program project type.

> **See detailed description at**: [project-config-json-details](../common/project-config-json-details.md)

### 3.2 app.json (required)

The global configuration file of the mini program, used to configure the page list, window style, bottom tab bar (tabBar), subpackages, network timeout, and other global configurations.

> **See detailed description at**: [app-json-details](../common/app-json-details.md) and [Global configuration](./guide/mini_program_app_configuration.md)

**Minimal practical example**:

```json
{
  "pages": [
    "pages/index/index"
  ],
  "window": {
    "navigationBarBackgroundColor": "#ffffff",
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "DSL mini program"
  }
}
```

### 3.3 app.js (required)

The mini program entry file, defining the mini program's lifecycle functions and global methods.

> **See detailed description at**: [app-js-details](../common/app-js-details.md)

**Basic example**:

```javascript
// app.js
App({
  onLaunch() {},
  onShow() {},
  onHide() {}
});
```

### 3.4 app.mass (optional)

The global style file, defining the style rules used globally. Styles defined in `app.mass` apply to every page.

```css
/**app.mass**/
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
```

### 3.5 sitemap.json (required)

The page index configuration file, located in the project root directory, used to configure whether pages are allowed to be indexed by search engines. It is one of the required configuration files for DSL mini programs. Its location is specified through the `sitemapLocation` field in `app.json`; if indexing rules are not configured, all pages are allowed to be indexed by default.

> **See detailed description at**: [sitemap-json-details](../common/sitemap-json-details.md)

---

## 4. Page structure and lifecycle

Each page consists of four files, located in the `pages/page-name/` directory:

| File | Required | Description |
|------|------|------|
| page.js | Yes | Page logic file, defining the page's data and methods |
| page.maml | Yes | Page template file, defining the page structure |
| page.json | No | Page configuration file, defining the page's window style, custom components, etc. (inherits the window configuration of app.json when not configured) |
| page.mass | No | Page style file, defining the page style |

Page configuration items will override the same configuration items in the `window` of `app.json`. See [Page configuration](./guide/mini_program_page_configuration.md) for details.

**Example - pages/index/index.js**:

```javascript
// index.js
Page({
  data: {
    motto: 'Hello World'
  },
  onLoad(options) {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {}
});
```

**Example - pages/index/index.maml**:

```xml
<!--index.maml-->
<view class="container">
  <text>{{motto}}</text>
</view>
```

For page lifecycle and event system, see [Event system](./guide/event.md).

---

## 5. Syntax

DSL mini programs use three sets of custom languages: MAML, MASS, and SJS. For detailed syntax, refer to the `syntax/` directory:

### 5.1 MAML

MAML is a tag language designed by the framework, combined with basic components and an event system to build page structures. It supports data binding, list rendering (`ma:for`), conditional rendering (`ma:if`/`ma:elif`/`ma:else`), templates (`template`), file references (`import`/`include`), and simple two-way binding (`model:` prefix).

> See: [Data binding](./syntax/maml/data.md) · [List rendering](./syntax/maml/list.md) · [Conditional rendering](./syntax/maml/condition.md) · [Templates](./syntax/maml/template.md) · [References](./syntax/maml/import.md) · [Two-way binding](./syntax/maml/two-way-bind.md)

### 5.2 MASS

MASS is a set of style languages with most of the features of CSS, and extends the size unit `rpx` (the screen width is defined as 750rpx, which can adapt to the screen width) and style imports (`@import`). It supports inline styles (`style`/`class`), global styles (`app.mass`), and local styles (page `.mass`).

> See: [MASS](./syntax/mass.md)

### 5.3 SJS

SJS is a custom scripting language running on the rendering layer (a subset of JavaScript, not the same language as JavaScript). It can be used in MAML through the `<sjs>` tag or `.sjs` files to build page structures and respond to component events. The SJS runtime environment is isolated from the logic layer and cannot call mini program APIs.

> See: [SJS overview](./syntax/sjs/overview.md) · [Variables](./syntax/sjs/variable.md) · [Data types](./syntax/sjs/datatype.md) · [Operators](./syntax/sjs/operator.md) · [Statements](./syntax/sjs/statement.md) · [Base library](./syntax/sjs/basiclib.md) · [Events](./syntax/sjs/event.md) · [Comments](./syntax/sjs/comment.md)

### 5.4 Logic layer (JavaScript)

The logic layer runs using a JavaScript engine, providing mini program specific APIs. For security reasons, it does not support `eval`, `new Function` (except `new Function('return this')`), `window`, `document`, etc.; it does not support dynamically executing JS code.

> See: [Logic layer](./syntax/js.md)

---

## 6. Basic components

DSL mini programs provide a set of basic components for building interfaces, including view containers, basic content, forms, media, maps, navigation, etc. They can be used in MAML by their corresponding tag names.

> **For the complete component list, see**: [DSL_COMPONENT_LIST.md](./DSL_COMPONENT_LIST.md)

Common component examples:

```xml
<view class="container">
  <text>{{message}}</text>
  <button type="primary" bindtap="handleTap">Click</button>
  <input placeholder="Please enter" />
</view>
```

For the properties, events, default values, and examples of each component, please refer to the corresponding detail files under the `component/` directory.

---

## 7. API interfaces

DSL mini programs call native capabilities and platform services through the `ma.*` API of the logic layer, covering basic capabilities, devices, networks, files, storage, media, routing, UI, maps, user authorization, payments, etc.

> **For the complete API list, see**: [DSL_API_LIST.md](./DSL_API_LIST.md)

**Basic calling method**:

```javascript
ma.showToast({
  title: 'Success',
  icon: 'success'
});

ma.request({
  url: 'https://example.com/api',
  method: 'GET',
  success(res) {
    console.log(res.data);
  },
  fail(err) {
    console.log(err.errMsg);
  }
});
```

Some interfaces (such as location, microphone, camera, user information, etc.) require user authorization (`scope`) before they can be called. You can use `ma.authorize` to initiate an authorization request in advance. See [User authorization](./api/openApi/authority.md) for details.

---

## 8. Related documents

- [File structure](./guide/mini_program_file_structure.md) · [Global configuration](./guide/mini_program_app_configuration.md) · [Page configuration](./guide/mini_program_page_configuration.md) · [Event system](./guide/event.md)
- [Basic component list](./DSL_COMPONENT_LIST.md)
- [API interface list](./DSL_API_LIST.md)
- Configuration file details: [project.config.json](../common/project-config-json-details.md) · [app.json](../common/app-json-details.md) · [app.js](../common/app-js-details.md) · [sitemap.json](../common/sitemap-json-details.md)
