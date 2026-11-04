## switch

> Switch selector.

| Property     | Type          | Default Value | Required | Description                                            |
|:-----------|:------------|:--------|:---|:----------------------------------------------|
| checked    | Boolean     | false   | No  | Whether selected                                          |
| disabled   | Boolean     | false   | No  | Whether to disable                                          |
| type       | String      | switch  | No  | Style. Valid values: switch, checkbox                       |
| color      | String      | #04BE02 | No  | The color of the switch, same as the CSS color                      |
| bindchange | Eventhandle |         | No  | Triggered with a change event when checked changes. event.detail={ value} |

### Sample Code

```html

<view>
  <switch bindchange='switchChange' />
</view>
```

```js
Page({
  switchChange: function(e) {
    console.log(e.detail.value)
  }
})

```
