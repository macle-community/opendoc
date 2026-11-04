# project.config.json Details

## Overview

`project.config.json` is the project configuration file for both DSL and H5 mini-programs, located in the project root directory. This file records important information such as the mini-program's ID, name, and compilation type, and is the key file for the Macle development tool to recognize a DSL mini-program project type.

## Purpose

1. **Project Identification**: Uniquely identifies the mini-program project
2. **Compilation Configuration**: Defines the project's compilation options and build behavior
3. **Tool Recognition**: The core basis for the Macle development tool to recognize DSL mini-programs
4. **Team Sharing**: Facilitates sharing project configuration among team members

## Configuration Parameters

### Basic Parameters

| Parameter Name | Type | Required | Default Value | Description |
|--------|------|------|--------|------|
| projectname | string | Yes | - | Project name |
| appid | string | Yes | - | Unique identifier ID of the mini-program |
| description | string | No | - | Project description |
| compileType | string | No | "miniprogram" | Compilation type |

### setting Object

Compilation setting options that control behavior during compilation.

| Parameter Name | Type | Required | Default Value | Description |
|--------|------|------|--------|------|
| urlCheck | boolean | No | true | Whether to check the security domain |
| es5 | boolean | No | true | Whether to enable ES5-to-ES6 conversion |
| es6 | boolean | No | true | Whether to preserve ES6 syntax |
| postcss | boolean | No | true | Whether to enable PostCSS |
| minified | boolean | No | true | Whether to minify code |
| newFeature | boolean | No | false | Whether to enable new features |
| packNpmManually | boolean | No | false | Whether to manually package npm |
| packNpmRelationList | array | No | [] | npm package configuration list |

### packOptions Object

Packaging options configuration.

| Parameter Name | Type | Required | Default Value | Description |
|--------|------|------|--------|------|
| ignore | array | No | [] | Files or directories to ignore during packaging |

### Other Parameters

| Parameter Name | Type | Required | Default Value | Description |
|--------|------|------|--------|------|
| libVersion | string | No | - | Base library version number |
| isGameTourist | boolean | No | false | Whether it is a game tourist |
| simulatorType | string | No | - | Simulator type |
| simulatorPluginLibVersion | object | No | {} | Simulator plugin version |
| condition | object | No | - | Conditional compilation configuration |
| miniprogramRoot | string | No | "./" | Mini-program root directory |

## Detailed Parameter Description

### compileType

Compilation type, specifying the compilation mode of the mini-program:

| Value | Description |
|----|------|
| miniprogram | Standard mini-program mode |
| game | Game mini-program mode |
| plugin | Plugin mode |

### setting.urlCheck

Whether to check the security domain. When enabled, the requested domain must be in the security domain list configured in the Macle Developer Platform.

### setting.es5

Whether to convert ES6 syntax to ES5. It is recommended to keep this enabled for compatibility with lower-version devices.

### setting.postcss

Whether to enable PostCSS for CSS processing, including automatically adding prefixes, etc.

### setting.minified

Whether to minify code. It is recommended to enable this when releasing; it can be disabled during development for easier debugging.

### setting.newFeature

Whether to enable new feature functionality.

### condition

Conditional compilation configuration, used to specify launch parameters:

- **search**: Search scenario
- **conversation**: Conversation scenario
- **plugin**: Plugin scenario
- **game**: Game scenario
- **miniprogram**: Mini-program scenario

## Notes

1. **appid**: A valid mini-program AppID must be filled in, which can be obtained from the Macle Developer Platform
2. **projectname**: The project name cannot contain special characters (\ / : * ? % & @ # . " ~ < > |)
3. **File location**: Must be placed in the project root directory
4. **Team sharing**: It is recommended to add this file to version control so team members can share the configuration

## Configuration Example

### Basic Configuration

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

## Related Documentation

- [DSL Mini-Program Development Guide](../DSL/DSL-Minicprogram-Development-Guide.md)
- [app.json Details](./app-json-details.md)
- [sitemap.json Details](./sitemap-json-details.md)
