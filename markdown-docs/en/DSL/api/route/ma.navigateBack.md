## ma.navigateBack(Object object)

> Closes the current page and returns to the previous page or multiple pages back. You can use getCurrentPages to get the current page stack and decide how many levels to return.

### Parameters

**Object object**

| Property  | Type     | Default | Required | Description                              |
|:---------|:---------|:----|:---|:--------------------------------|
| delta    | Number   | 1   | No  | Number of pages to return. If delta is greater than the existing number of pages, it returns to the home page. |
| success  | Function |     | No  | Callback function for successful interface call                     |
| fail     | Function |     | No  | Callback function for failed interface call                     |
| complete | Function |     | No  | Callback function for the end of the interface call (executed on both success and failure)        |

### Sample code

```js
//Note: When calling navigateTo to jump, the page that calls this method will be added to the stack, while the redirectTo method will not. See the sample code below
ma.navigateTo({
  url: 'B?id=1'
});

// This is page B
ma.navigateTo({
  url: 'C?id=1'
});

// Calling navigateBack on page C will return to page A
ma.navigateBack({
  delta: 2
});
```