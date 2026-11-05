"use strict";

var _component = require("../common/component");
var _transition = _interopRequireDefault(require("../mixins/transition"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(0, _component.MaComponent)({
  behaviors: [_transition.default],
  properties: {
    customStyle: String,
    zIndex: {
      type: Number,
      value: 1
    },
    lockScroll: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    onClick: function onClick() {
      this.triggerEvent('click', '', {
        bubbles: true
      });
    },
    // for prevent touchmove
    noop: function noop() {}
  }
});