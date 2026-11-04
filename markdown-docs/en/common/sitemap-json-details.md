# sitemap.json Details

## Overview

`sitemap.json` is the page indexing configuration file for a DSL mini-program, used to configure whether mini-program pages are allowed to be indexed by search engines. This file is located in the project root directory and is one of the required configuration files for a DSL mini-program.

## Purpose

1. **Page Indexing Control**: Controls which pages can be indexed by search engines
2. **Privacy Protection**: Allows developers to exclude pages they do not want to make public
3. **SEO Optimization**: Helps search engines better understand the mini-program structure
4. **Compliance Requirements**: Meets the compliance needs of certain business scenarios

## Configuration Parameters

### desc string

Configuration file description.

**Example**:
```json
{
  "desc": "Mini-program page indexing configuration file"
}
```

### rules Array (required)

Page indexing rules array, defining the indexing behavior of each page.

| Parameter Name | Type | Required | Description |
|--------|------|------|------|
| action | string | Yes | Rule action (allow/deny) |
| page | string | Yes | Page path (* means all pages) |

**action optional values**:

| Value | Description |
|----|------|
| allow | Allow the page to be indexed |
| deny | Forbid the page from being indexed |

**page optional values**:

| Value | Description |
|----|------|
| * | All pages |
| pagePath | Specific page path (without file extension) |

## Configuration Examples

### Allow all pages to be indexed

```json
{
  "desc": "Mini-program page indexing configuration",
  "rules": [
    {
      "action": "allow",
      "page": "*"
    }
  ]
}
```

### Forbid all pages from being indexed

```json
{
  "desc": "Mini-program page indexing configuration",
  "rules": [
    {
      "action": "deny",
      "page": "*"
    }
  ]
}
```

### Allow the home page to be indexed, forbid other pages

```json
{
  "desc": "Mini-program page indexing configuration",
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

### Forbid the personal center page from being indexed

```json
{
  "desc": "Mini-program page indexing configuration",
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

### Complex Configuration Example

```json
{
  "desc": "Shopping mall mini-program page indexing configuration",
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

## Rule Matching Order

1. Rules are matched in configuration order
2. The first matching rule takes effect, and subsequent rules are no longer matched
3. It is recommended to place specific page rules first and wildcard rules last

**Correct Example**:
```json
{
  "rules": [
    { "action": "allow", "page": "pages/index/index" },  // Match specific page first
    { "action": "deny", "page": "*" }                     // Then match all pages
  ]
}
```

## Notes

1. **File location**: Must be placed in the project root directory
2. **File reference**: Specified via `sitemapLocation` in `app.json`
3. **Default value**: If not configured, all pages are allowed to be indexed by default
4. **Page path**: Page paths do not include the file extension, consistent with the `pages` configuration in `app.json`

## Related Configuration

### Referencing in app.json

Specify the location of sitemap.json via the `sitemapLocation` field in `app.json`:

```json
{
  "pages": [
    "pages/index/index"
  ],
  "sitemapLocation": "sitemap.json"
}
```

## Applicable Scenarios

### Scenarios suitable for allow

- Product detail pages (need SEO optimization)
- Category pages
- Article detail pages
- Store information pages

### Scenarios suitable for deny

- User personal center pages
- Order pages (contain private information)
- Payment pages
- Settings pages
- Login pages

## Related Documentation

- [DSL Mini-Program Development Guide](../DSL/DSL-Minicprogram-Development-Guide.md)
- [app.json Details](./app-json-details.md)
- [project.config.json Details](./project-config-json-details.md)
- [DSL and H5 Mini-Program Differences Comparison](./dsl-h5-difference.md)
