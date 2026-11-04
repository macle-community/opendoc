## form

> 表单。将组件内的用户输入的[switch](MACLE_COMPONENT_SWITCH) [input](MACLE_COMPONENT_INPUT) [checkbox](MACLE_COMPONENT_CHECKBOX) [slider](MACLE_COMPONENT_SLIDER) [radio](MACLE_COMPONENT_RADIO) [picker](MACLE_COMPONENT_PICKER)
提交。

当点击 [form](MACLE_COMPONENT_FORM) 表单中 form-type 为 submit 的 [button](MACLE_COMPONENT_BUTTON) 组件时，会将表单组件中的
value 值进行提交，需要在表单组件中加上 name 来作为 key。

| 属性         | 类型          | 默认值 | 必填 | 说明                                                                               |
|:-----------|:------------|:----|:---|:---------------------------------------------------------------------------------|
| bindsubmit | Eventhandle |     | 否  | 携带 form 中的数据触发 submit 事件，event.detail = {value : {'name': 'value'} , formId: ''} |
| bindreset  | Eventhandle |     | 否  | 表单重置时会触发 reset 事件                                                                |

### 示例代码

```html

<form bindsubmit='submit' bindreset='reset' id='form'>
  <view>
    <view>radio</view>
    <radio-group name='radio' id='radioGroup'>
      <label>
        <radio value='radio1' id='radio1' />
        radio1
      </label>
      <label>
        <radio value='radio2' id='radio2' />
        radio2
      </label>
    </radio-group>
  </view>

  <view>
    <button id='submit' type='primary' formType='submit'>Submit</button>
    <button id='reset' formType='reset'>Reset</button>
  </view>
</form>
```

```js
Page({
  submit: function(e) {
    console.log(e.detail.value)
  },
  reset: function() {
    console.log('rest')
  }
})
```

