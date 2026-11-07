## form

> Form. Submits the user input [switch](MACLE_COMPONENT_SWITCH) [input](MACLE_COMPONENT_INPUT) [checkbox](MACLE_COMPONENT_CHECKBOX) [slider](MACLE_COMPONENT_SLIDER) [radio](MACLE_COMPONENT_RADIO) [picker](MACLE_COMPONENT_PICKER)
within the component.

When the [button](MACLE_COMPONENT_BUTTON) component with form-type set to submit in the [form](MACLE_COMPONENT_FORM) is clicked, the
value of the form component will be submitted. A name must be added to the form component to serve as the key.

| Property     | Type          | Default Value | Required | Description                                                                               |
|:-----------|:------------|:----|:---|:---------------------------------------------------------------------------------|
| bindsubmit | Eventhandle |     | No  | Triggers the submit event carrying the data in the form. event.detail = {value : {'name': 'value'} , formId: ''} |
| bindreset  | Eventhandle |     | No  | Triggers the reset event when the form is reset                                                                |

### Sample Code

#### 1. Form Container with Submit & Reset Handlers

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

