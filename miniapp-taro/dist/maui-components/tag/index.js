"use strict";

var _component = require("../common/component");
(0, _component.MaComponent)({
  properties: {
    size: String,
    mark: Boolean,
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String,
    type: {
      type: String,
      value: 'default'
    },
    closeable: Boolean
  },
  methods: {
    onClose() {
      this.triggerEvent('close');
    }
  }
});