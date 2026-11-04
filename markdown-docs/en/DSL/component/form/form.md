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

