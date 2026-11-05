"use strict";

var _component = require("../common/component");
var _validator = require("../common/validator.js");
const LONG_PRESS_START_TIME = 600;
const LONG_PRESS_INTERVAL = 200;

// add num and avoid float number
function add(num1 /* number */, num2 /* number */) {
  const cardinal = 10 ** 10;
  return Math.round((num1 + num2) * cardinal) / cardinal;
}
function equal(value1 /* number | string */, value2 /* number | string */) {
  return String(value1) === String(value2);
}
(0, _component.MaComponent)({
  properties: {
    decimalLength: {
      type: Number,
      value: null,
      observer: 'check'
    },
    integer: {
      type: Boolean,
      observer: 'check'
    },
    longPress: {
      type: Boolean,
      value: true
    },
    max: {
      type: null,
      value: Number.MAX_SAFE_INTEGER,
      observer: 'check'
    },
    min: {
      type: null,
      value: 1,
      observer: 'check'
    },
    showMinus: {
      type: Boolean,
      value: true
    },
    showPlus: {
      type: Boolean,
      value: true
    },
    step: {
      type: null,
      value: 1
    },
    value: {
      type: null,
      observer: 'observeValue'
    },
    theme: String,
    plusStyle: String,
    disabled: Boolean,
    inputWidth: String,
    buttonSize: String,
    minusStyle: String,
    inputStyle: String,
    customStyle: String,
    disablePlus: Boolean,
    asyncChange: Boolean,
    alwaysEmbed: Boolean,
    disableMinus: Boolean,
    disableInput: Boolean
  },
  field: true,
  classes: ['input-class', 'plus-class', 'minus-class'],
  data: {
    currentValue: ''
  },
  methods: {
    check() {
      const val = this.format(this.data.currentValue);
      if (!equal(val, this.data.currentValue)) {
        this.setData({
          currentValue: val
        });
      }
    },
    emitChange(value) {
      if (!this.data.asyncChange) {
        this.setData({
          currentValue: value
        });
      }
      this.emit('change', value);
    },
    emit(...args) {
      this.triggerEvent.apply(this, args);
    },
    filter(value) {
      let legal = String(value).replace(/[^0-9.-]/g, '');
      if (this.data.integer && legal.indexOf('.') !== -1) {
        legal = legal.split('.')[0];
      }
      return legal;
    },
    format(value) {
      let limit = this.filter(value);
      limit = limit === '' ? 0 : Number(limit);
      limit = Math.max(Math.min(this.data.max, limit), this.data.min);
      if ((0, _validator.isDef)(this.data.decimalLength)) {
        limit = limit.toFixed(this.data.decimalLength);
      }
      return limit;
    },
    isDisabled(type) {
      const {
        disabled,
        disablePlus,
        disableMinus,
        currentValue,
        max,
        min
      } = this.data;
      if (type === 'plus') {
        return disabled || disablePlus || Number(currentValue) >= Number(max);
      }
      return disabled || disableMinus || Number(currentValue) <= Number(min);
    },
    longPressStep() {
      const action = () => {
        this.onChange();
        this.longPressStep();
      };
      this.longPressTimer = setTimeout(action, LONG_PRESS_INTERVAL);
    },
    observeValue() {
      const {
        value
      } = this.data;
      this.setData({
        currentValue: this.format(value)
      });
    },
    onBlur(event) {
      const value = this.format(event.detail.value);
      this.setData({
        currentValue: value
      });
      this.emitChange(value);
      this.emit('blur', {
        ...event.detail,
        value
      });
    },
    onChange() {
      const {
        type
      } = this;
      if (this.isDisabled(type)) {
        this.emit('overlimit', type);
        return;
      }
      const diff = type === 'minus' ? -Number(this.data.step) : +Number(this.data.step);
      const value = this.format(add(Number(this.data.currentValue), diff));
      this.emitChange(value);
      this.emit(type);
    },
    onFocus(event) {
      this.emit('focus', event.detail);
    },
    onInput(event) {
      const {
        value = ''
      } = event.detail || {};
      if (value === '') {
        return;
      }
      const formatted = this.format(value);
      this.emitChange(formatted);
    },
    onTap(event) {
      const {
        type
      } = event.currentTarget.dataset;
      this.type = type;
      this.onChange();
    },
    onTouchEnd() {
      if (!this.data.longPress) {
        return;
      }
      clearTimeout(this.longPressTimer);
    },
    onTouchStart(event) {
      if (!this.data.longPress) {
        return;
      }
      clearTimeout(this.longPressTimer);
      this.type = event.currentTarget.dataset.type;
      this.isLongPress = false;
      const action = () => {
        this.isLongPress = true;
        this.onChange();
        this.longPressStep();
      };
      this.longPressTimer = setTimeout(action, LONG_PRESS_START_TIME);
    }
  },
  created() {
    this.setData({
      currentValue: this.format(this.data.value)
    });
  }
});