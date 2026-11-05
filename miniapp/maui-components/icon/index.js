"use strict";

var _component = require("../common/component");
(0, _component.MaComponent)({
  properties: {
    dot: {
      type: Boolean,
      value: false
    },
    info: null,
    size: {
      type: String,
      value: '1em'
    },
    color: {
      type: String,
      value: '#2c2c2c'
    },
    customStyle: String,
    classPrefix: {
      type: String,
      value: 'maui-icon'
    },
    name: String
  },
  methods: {
    onClick() {
      this.triggerEvent('click');
    }
  }
});