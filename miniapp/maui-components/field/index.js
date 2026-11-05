"use strict";

var _props = require("./props");
var _component = require("../common/component");
(0, _component.MaComponent)({
  properties: {
    ..._props.commonProps,
    ..._props.textareaProps,
    ..._props.inputProps,
    label: String,
    error: Boolean,
    inputAlign: String,
    errorMessage: String,
    showWordLimit: Boolean,
    errorMessageAlign: String
  },
  methods: {
    onInput(event) {
      const {
        value = ''
      } = event.detail || {};
      this.value = value;
      this.setData({
        value: this.value
      });
      this.triggerEvent('input', event.detail);
    },
    onFocus(event) {
      this.triggerEvent('focus', event.detail);
    },
    onBlur(event) {
      this.triggerEvent('blur', event.detail);
    },
    onConfirm(event) {
      const {
        value = ''
      } = event.detail || {};
      this.value = value;
      this.triggerEvent('confirm', value);
    },
    onLineChange(event) {
      this.triggerEvent('linechange', event.detail);
    }
  }
});