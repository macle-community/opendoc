"use strict";

var _component = require("../common/component");
var _relation = require("../common/relation");
(0, _component.MaComponent)({
  field: true,
  relations: (0, _relation.useChildren)('radio'),
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
  methods: {
    updateChildren() {
      this.triggerEvent('change', this.properties.value);
      const children = this.getRelationNodes('../radio/index');
      children.forEach(child => child.updateFromParent());
    }
  }
});