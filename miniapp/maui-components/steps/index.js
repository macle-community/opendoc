"use strict";

var _color = require("../common/color");
var _component = require("../common/component");
(0, _component.MaComponent)({
  classes: ['desc-class'],
  properties: {
    direction: {
      type: String,
      value: 'horizontal'
    },
    activeIcon: {
      type: String,
      value: 'success-black'
    },
    activeColor: {
      type: String,
      value: _color.GREEN
    },
    inactiveColor: {
      type: String,
      value: _color.GRAY_DARK
    },
    icon: String,
    steps: {
      type: Array,
      value: []
    },
    active: {
      type: Number,
      value: 0
    },
    descStyle: String,
    customStyle: String,
    inactiveIcon: String
  },
  methods: {
    onClick(event) {
      const {
        index
      } = event.currentTarget.dataset;
      this.emit('clickstep', index);
    },
    emit(...args) {
      this.triggerEvent.apply(this, args);
    }
  }
});