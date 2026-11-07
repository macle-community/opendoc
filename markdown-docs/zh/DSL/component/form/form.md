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

#### 1. 表单容器提交与重置

```html
<form bindsubmit="onFormSubmit" bindreset="onFormReset">
  <view class="form-field">
    <text class="form-label">Username:</text>
    <input name="username" class="form-input" placeholder="Enter username" />
  </view>
  <view class="form-field">
    <text class="form-label">Notifications:</text>
    <switch name="notify" checked="true" color="#2563eb" />
  </view>
  <view class="form-actions">
    <button form-type="submit" type="primary" size="mini">Submit</button>
    <button form-type="reset" type="default" size="mini">Reset</button>
  </view>
</form>
```

```js
Page({
  onFormSubmit(e) {
    ma.showModal({ title: 'Form Submitted', content: JSON.stringify(e.detail.value), showCancel: false });
  },
  onFormReset() {
    ma.showToast({ title: 'Form Reset', icon: 'none' });
  }
});
```

```css
.form-field { margin-bottom: 14px; }
.form-label { font-size: 13px; color: #475569; margin-bottom: 6px; display: block; }
.form-input { border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 10px; font-size: 14px; }
.form-actions { display: flex; gap: 10px; margin-top: 10px; }
```

