"use strict";

var _component = require("../common/component");
var _relation = require("../common/relation");
(0, _component.MaComponent)({
  field: true,
  relations: (0, _relation.useChildren)('checkbox'),
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
  methods: {
    updateChildren() {
      this.triggerEvent('change', this.properties.value);
      const children = this.getRelationNodes('../checkbox/index');
      children.forEach(child => child.updateFromParent());
    }
  }
});