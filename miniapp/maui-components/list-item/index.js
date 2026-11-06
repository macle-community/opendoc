"use strict";

var _component = require("../common/component");
(0, _component.MaComponent)({
  properties: {
    arrow: {
      type: String,
      value: ''
    },
    brief: {
      type: String,
      value: ''
    },
    className: {
      type: String,
      value: ''
    },
    disabled: {
      type: Boolean,
      value: false
    },
    extra: {
      type: String,
      value: ''
    },
    extraBrief: {
      type: String,
      value: ''
    },
    image: {
      type: String,
      value: ''
    },
    radius: {
      type: Boolean,
      value: false
    },
    showDivider: {
      type: Boolean,
      value: true
    },
    style: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    }
  },
  methods: {
    onTap(e) {
      if (this.data.disabled) {
        return;
      }
      this.triggerEvent('tap', e);
    },
    catchTap(e) {
      if (this.data.disabled) {
        return;
      }
      this.triggerEvent('catchTap', e);
    }
  }
});