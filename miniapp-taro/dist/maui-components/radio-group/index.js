"use strict";

var _component = require("../common/component");
var _relation = require("../common/relation");
(0, _component.MaComponent)({
  field: true,
  relations: (0, _relation.useChildren)('radio', function (target) {
    if (target && target.updateFromParent) target.updateFromParent();
  }),
  properties: {
    value: {
      type: null,
      observer: 'updateChildren'
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
      const children = this.getRelationNodes('../radio/index');
      children.forEach(child => child.updateFromParent());
    }
  }
});
