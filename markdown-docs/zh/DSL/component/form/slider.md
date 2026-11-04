## slider

> 滑动选择器。

| 属性              | 类型          | 默认值     | 必填 | 说明                                  |
|:----------------|:------------|:--------|:---|:------------------------------------|
| min             | Number      | 0       | 否  | 最小值                                 |
| max             | Number      | 100     | 否  | 最大值                                 |
| step            | Number      | 1       | 否  | 步长，取值必须大于 0，并且可被(max - min)整除       |
| disabled        | Boolean     | false   | 否  | 是否禁用                                |
| value           | Number      | 0       | 否  | 当前取值                                |
| activeColor     | String      | #1aad19 | 否  | 已选择的颜色                              |
| backgroundColor | String      | #e9e9e9 | 否  | 背景条的颜色                              |
| block-size      | Number      | 28      | 否  | 滑块的大小，取值范围为 12 - 28                 |
| block-color     | String      | #ffffff | 否  | 滑块的颜色                               |
| show-value      | Boolean     | false   | 否  | 是否显示当前 value                        |
| bindchange      | Eventhandle |         | 否  | 完成一次拖动后触发的事件，event.detail = {value} |
| bindchanging    | Eventhandle |         | 否  | 拖动过程中触发的事件，event.detail = {value}   |

### 示例代码

```html

<view>
  <view>滑块</view>
  <view>
    <view>设置step</view>
    <view>
      <slider value='5' onChange='slider1change' step='5' />
    </view>
  </view>

  <view>
    <view>设置最小/最大值范围</view>
    <view>
      <slider value='33' onChange='slider2change' min='25' max='50' show-value />
    </view>
  </view>

  <view>
    <view>自定义样式</view>
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
      console.log('slider' + index + '发生change事件，携带值为', e.detail.value);
    };
  })(i);
}
Page(pageData);

```
