## web-view

> A container that hosts web pages. It will automatically fill the entire mini program page.

| Property       | Type     | Default Value | Required | Description                                                                                            |
|:-------------|:-------|:----------|:---|:----------------------------------------------------------------------------------------------|
| src          | String |           | No  | The web page link that the webview points to                                                                               |
| header       | String |           | No  | Extra header information needed to access the page. Both key and value are String                                                           |
| loadingStyle | String | 'default' | No  | The loading style type during page loading. There are two styles: `default` and `loadingWithLogo`. Any other invalid input displays the `default` effect (minimum version: 25.12.0) |

### Sample Code

```html
<web-view src="https://example.com/" header="{ 'key': 'value' }" loadingStyle="loadingWithLogo"></web-view>
```
