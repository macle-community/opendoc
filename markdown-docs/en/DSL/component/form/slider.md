## slider

> Sliding selector.

| Property          | Type          | Default Value | Required | Description                                  |
|:----------------|:------------|:--------|:---|:------------------------------------|
| min             | Number      | 0       | No  | Minimum value                                 |
| max             | Number      | 100     | No  | Maximum value                                 |
| step            | Number      | 1       | No  | Step size. Must be greater than 0 and divisible by (max - min)       |
| disabled        | Boolean     | false   | No  | Whether to disable                                |
| value           | Number      | 0       | No  | Current value                                |
| activeColor     | String      | #1aad19 | No  | Color of the selected part                              |
| backgroundColor | String      | #e9e9e9 | No  | Color of the background bar                              |
| block-size      | Number      | 28      | No  | Size of the slider block. Value range is 12 - 28                 |
| block-color     | String      | #ffffff | No  | Color of the slider block                               |
| show-value      | Boolean     | false   | No  | Whether to display the current value                        |
| bindchange      | Eventhandle |         | No  | Event triggered after a drag is completed. event.detail = {value} |
| bindchanging    | Eventhandle |         | No  | Event triggered during dragging. event.detail = {value}   |

### Sample Code

```html

<view>
  <view>Slider</view>
  <view>
    <view>Set step</view>
    <view>
      <slider value='5' onChange='slider1change' step='5' />
    </view>
  </view>

  <view>
    <view>Set min/max range</view>
    <view>
      <slider value='33' onChange='slider2change' min='25' max='50' show-value />
    </view>
  </view>

  <view>
    <view>Custom style</view>
    <view>
      <slider value='33' onChange='slider3change' min='25' max='50' show-value
              backgroundColor='#FFAA00' activeColor='#00aaee' trackSize='2' handleSize='6' handleColor='blue' />
    </view>
  </view>
</view>

```

```js
const pageData = {};

for (let i = 1; i < 3; ++i) {
  (function(index) {
    pageData['slider' + index + 'change'] = function(e) {
      console.log('slider' + index + ' triggered a change event, carrying the value', e.detail.value);
    };
  })(i);
}
Page(pageData);

```
