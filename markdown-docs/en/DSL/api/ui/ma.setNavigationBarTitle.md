## ma.setNavigationBarTitle(Object object)

> Dynamically sets the title of the current page

### Parameters

#### Object object

| Property  | Type     | Default | Required | Description                       |
|:---------|:---------|:----|:---|:-------------------------|
| title    | String   |     | Yes  | Page title                     |
| success  | Function |     | No  | Callback function for successful interface call              |
| fail     | Function |     | No  | Callback function for failed interface call              |
| complete | Function |     | No  | Callback function for the end of the interface call (executed on both success and failure) |

### Sample code

```js
    ma.setNavigationBarTitle({
      title: 'Current page'
    })
```