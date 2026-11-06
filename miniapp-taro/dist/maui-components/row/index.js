"use strict";

var _component = require("../common/component");
var _relation = require("../common/relation");
(0, _component.MaComponent)({
  relations: (0, _relation.useChildren)('col', function (target) {
    const {
      gutter
    } = this.data;
    if (gutter) {
      target.setData({
        gutter
      });
    }
  }),
  properties: {
    gutter: {
      type: Number,
      observer: 'setGutter'
    }
  },
  methods: {
    setGutter() {
      const children = this.getRelationNodes('../col/index');
      children.forEach(col => {
        col.setData(this.data);
      });
    }
  }
});