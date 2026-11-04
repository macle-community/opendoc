## ma.loadFontFace(Object object)

> Dynamically loads a network font. The file address must be of download type  (Minimum version: 23.6.0)

### Parameters

#### Object object

| Property  | Type     | Default | Required | Description                                            |
|:---------|:---------|:------|:---|:----------------------------------------------|
| global   | Boolean  | false | No  | Whether it takes effect globally                                        |
| family   | String   |       | Yes  | Defined font name                                       |
| source   | String   |       | Yes  | Address of the font resource. Recommended formats are TTF and WOFF; WOFF2 is incompatible on lower iOS versions. |
| desc     | Object   |       | No  | Optional font descriptor                                      |
| success  | Function |       | No  | Callback function for successful interface call                                   |
| fail     | Function |       | No  | Callback function for failed interface call                                   |
| complete | Function |       | No  | Callback function for the end of the interface call (executed on both success and failure)                      |



##### desc properties

| Structure property | Type    | Default   | Required | Description                                                 |
|:--------|:-------|:---------|:---|----------------------------------------------------|
| style   | String | 'normal' | No  | Font style, optional values are normal / italic / oblique                |
| weight  | String | 'normal' | No  | Font weight, optional values are normal / bold / 100 / 200../ 900         |
| variant | String | 'normal' | No  | Sets the font display text for small caps, optional values are normal / small-caps / inherit |



##### object.success callback function

###### Parameters

###### Object res

| Property | Type    | Description     |
|:-------|:-------|:-------|
| status | String | Font loading result |

##### object.fail callback function

###### Parameters

###### Object res

| Property | Type    | Description     |
|:-------|:-------|:-------|
| status | String | Font loading result |

##### object.complete callback function

###### Parameters

###### Object res

| Property | Type    | Description     |
|:-------|:-------|:-------|
| status | String | Font loading result |

### Sample code

```js
ma.loadFontFace({
  family: 'Bitstream Vera Serif Bold',
  source: 'url("https://testExample/fontName.ttf")', //For illustration only, not a real resource link
  success: function (res) {
      console.log(res)
  }
})
```