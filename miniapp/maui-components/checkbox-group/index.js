"use strict";

var _component = require("../common/component");
var _relation = require("../common/relation");
(0, _component.MaComponent)({
  field: true,
  relations: (0, _relation.useChildren)('checkbox', function (target) {
    if (target && target.updateFromParent) target.updateFromParent();
  }),
  properties: {
    value: {
      type: Array,
      observer: 'updateChildren'
    },
    max: {
      type: Number,
      value: 0
    },
    direction: String,
    disabled: {
      type: Boolean,
      observer: 'updateChildren'
    }
  },
  ready() {
    this.updateChildren();
  },
  methods: {
    updateChildren() {
      let children = this.getRelationNodes('../checkbox/index') || [];
      if (!children.length) {
        children = this.getRelationNodes('maui-checkbox') || [];
      }
      children.forEach(child => child.updateFromParent && child.updateFromParent());
    }
  }
});
