# sitemap.json详情

## 概述

`sitemap.json`是DSL小程序的页面索引配置文件，用于配置小程序页面是否允许被搜索引擎索引。该文件位于项目根目录，是DSL小程序的必需配置文件之一。

## 作用

1. **页面索引控制**: 控制哪些页面可以被搜索引擎收录
2. **隐私保护**: 允许开发者排除不希望公开的页面
3. **SEO优化**: 帮助搜索引擎更好地理解小程序结构
4. **合规要求**: 满足部分业务场景的合规需求

## 配置参数

### desc string

配置文件描述信息。

**示例**:
```json
{
  "desc": "小程序页面索引配置文件"
}
```

### rules数组（必需）

页面索引规则数组，定义每个页面的索引行为。

| 参数名 | 类型 | 必需 | 说明 |
|--------|------|------|------|
| action | string | 是 | 规则动作（allow/deny） |
| page | string | 是 | 页面路径（*表示所有页面） |

**action可选值**:

| 值 | 说明 |
|----|------|
| allow | 允许页面被索引 |
| deny | 禁止页面被索引 |

**page可选值**:

| 值 | 说明 |
|----|------|
| * | 所有页面 |
| pagePath | 具体的页面路径（不带文件后缀） |

## 配置示例

### 允许所有页面被索引

```json
{
  "desc": "小程序页面索引配置",
  "rules": [
    {
      "action": "allow",
      "page": "*"
    }
  ]
}
```

### 禁止所有页面被索引

```json
{
  "desc": "小程序页面索引配置",
  "rules": [
    {
      "action": "deny",
      "page": "*"
    }
  ]
}
```

### 允许首页被索引，禁止其他页面

```json
{
  "desc": "小程序页面索引配置",
  "rules": [
    {
      "action": "allow",
      "page": "pages/index/index"
    },
    {
      "action": "deny",
      "page": "*"
    }
  ]
}
```

### 禁止个人中心页面被索引

```json
{
  "desc": "小程序页面索引配置",
  "rules": [
    {
      "action": "allow",
      "page": "*"
    },
    {
      "action": "deny",
      "page": "pages/user/user"
    }
  ]
}
```

### 复杂配置示例

```json
{
  "desc": "购物商城小程序页面索引配置",
  "rules": [
    {
      "action": "allow",
      "page": "pages/index/index"
    },
    {
      "action": "allow",
      "page": "pages/category/category"
    },
    {
      "action": "allow",
      "page": "pages/detail/detail"
    },
    {
      "action": "deny",
      "page": "pages/user/user"
    },
    {
      "action": "deny",
      "page": "pages/order/order"
    }
  ]
}
```

## 规则匹配顺序

1. 规则按配置顺序匹配
2. 匹配到第一条规则后生效，后续规则不再匹配
3. 建议将具体页面规则放在前面，通配符规则放在后面

**正确示例**:
```json
{
  "rules": [
    { "action": "allow", "page": "pages/index/index" },  // 先匹配具体页面
    { "action": "deny", "page": "*" }                     // 再匹配所有页面
  ]
}
```

## 注意事项

1. **文件位置**: 必须放在项目根目录
2. **文件引用**: 在`app.json`中通过`sitemapLocation`指定
3. **默认值**: 如果不配置，默认允许所有页面被索引
4. **页面路径**: 页面路径不带文件后缀，与`app.json`中的`pages`配置保持一致

## 相关配置

### 在app.json中引用

在`app.json`中通过`sitemapLocation`字段指定sitemap.json的位置：

```json
{
  "pages": [
    "pages/index/index"
  ],
  "sitemapLocation": "sitemap.json"
}
```

## 适用场景

### 适合使用allow的场景

- 商品详情页（需要SEO优化）
- 分类页面
- 文章详情页
- 门店信息页

### 适合使用deny的场景

- 用户个人中心页面
- 订单页面（包含隐私信息）
- 支付页面
- 设置页面
- 登录页面

## 相关文档

- [DSL小程序开发指导](../DSL/DSL-Minicprogram-Development-Guide.md)
- [app.json详情](./app-json-details.md)
- [project.config.json详情](./project-config-json-details.md)
- [DSL和H5小程序差异对比](./dsl-h5-difference.md)