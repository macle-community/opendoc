"use strict";

var _component = require("../common/component");
var _relation = require("../common/relation");
(0, _component.MaComponent)({
  relations: (0, _relation.useParent)('row'),
  properties: {
    span: Number,
    offset: Number
  },
  data: {
    gutter: 0
  }
});