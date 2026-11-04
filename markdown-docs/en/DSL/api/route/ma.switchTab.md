## ma.switchTab(Object object)

> Jumps to a tabBar page and closes all other non-tabBar pages

### Parameters

**Object object**

| Property  | Type     | Default | Required | Description                                                                 |
|:---------|:---------|:----|:---|:-------------------------------------------------------------------|
| url      | String   |     | Yes  | The path (code package path) of the tabBar page to jump to (must be a page defined in the tabBar field of app.json). Parameters cannot be appended after the path. |
| success  | Function |     | No  | Callback function for successful interface call                                                        |
| fail     | Function |     | No  | Callback function for failed interface call                                                        |
| complete | Function |     | No  | Callback function for the end of the interface call (executed on both success and failure)                                           |

### Sample code

```json
{
  "tabBar": {
    "list": [
      {
        "pagePath": "index",
        "text": "Home"
      },
      {
        "pagePath": "other",
        "text": "Other"
      }
    ]
  }
}
```

```js
ma.switchTab({
  url: '/index'
});
```