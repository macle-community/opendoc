"use strict";

var _component = require("../common/component");
(0, _component.MaComponent)({
  data: {
    array12: Array.from({
      length: 12
    })
  },
  properties: {
    id: String,
    // 可选值: default primary info warning danger
    type: {
      type: String,
      value: 'default'
    },
    // 可选值: normal large small mini
    size: {
      type: String,
      value: 'normal'
    },
    formType: String,
    plain: Boolean,
    block: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    loadingText: String,
    customStyle: String,
    loadingType: {
      type: String,
      value: 'circular'
    },
    loadingSize: {
      type: String,
      value: '20px'
    },
    color: String,
    icon: String
  },
  methods: {
    onClick(event) {
      this.triggerEvent('click', event);
    }
  }
});