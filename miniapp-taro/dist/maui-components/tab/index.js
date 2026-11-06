"use strict";

var _component = require("../common/component");
var _relation = require("../common/relation");
(0, _component.MaComponent)({
  relations: (0, _relation.useParent)('tabs'),
  properties: {
    dot: {
      type: Boolean,
      observer: 'update'
    },
    info: {
      type: null,
      observer: 'update'
    },
    title: {
      type: String,
      observer: 'update'
    },
    disabled: {
      type: Boolean,
      observer: 'update'
    },
    titleStyle: {
      type: String,
      observer: 'update'
    },
    name: {
      type: null,
      value: ''
    }
  },
  data: {
    active: false
  },
  methods: {
    getComputedName() {
      if (this.data.name !== '') {
        return this.data.name;
      }
      return this.index;
    },
    updateRender(active, index, parent) {
      const {
        data: parentData
      } = parent;
      this.inited = this.inited || active;
      this.setData({
        index,
        active,
        shouldShow: active || parentData.animated,
        shouldRender: this.inited || !parentData.lazyRender
      });
    },
    update() {
      if (this.parent) {
        this.parent.updateTabs();
      }
    }
  }
});