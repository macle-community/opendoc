## page-meta

> A page property configuration node, used to specify some properties of the page and listen to page events.

> Through this node, you can achieve effects similar to calling [`ma.setBackgroundTextStyle`](SET_BACKGROUND_TEXT) [`ma.setBackgroundColor`](SET_BACKGROUND_COLOR)
and other interfaces.

### Property description

| Property         | Default Value | Type     | Required | Description                                                       |
|----------------|-----|--------|----|----------------------------------------------------------|
| root-font-size | ""  | String | No  | The root font size of the page. All rem units in the page will use this font size as the reference value, i.e. `1rem` equals this font size. |

### Sample Code

```html

<page-meta root-font-size='{{rootSize}}'>
  <view id='page-meta' style='font-size:2rem'>
    page-meta
  </view>
  <view class='fontStyle'>Second node</view>
</page-meta>
```
