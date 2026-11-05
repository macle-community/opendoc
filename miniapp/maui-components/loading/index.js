"use strict";

var _component = require("../common/component");
(0, _component.MaComponent)({
  properties: {
    color: {
      type: String,
      value: '#c9c9c9'
    },
    type: {
      type: String,
      value: 'circular'
    },
    size: {
      type: String,
      value: '30px'
    },
    textSize: {
      type: String,
      value: '14px'
    },
    vertical: {
      type: Boolean,
      value: false
    },
    customStyle: String
  },
  data: {
    styleArray: Array.from({
      length: 12
    })
  }
});