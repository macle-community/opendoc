"use strict";

var _component = require("../common/component");
var _relation = require("../common/relation");
(0, _component.MaComponent)({
  field: true,
  relations: (0, _relation.useParent)('checkbox-group', function () {
    this.updateFromParent();
  }),
  properties: {
    name: null,
    inParentArrIdx: {
      type: Number,
      value: -1
    },
    customIcon: {
      type: String,
      value: 'success-white'
    },
    iconSize: {
      type: null,
      value: 20
    },
    disabled: {
      type: Boolean,
      value: false
    },
    checkedColor: String,
    labelPosition: {
      type: String,
      value: 'right'
    },
    labelDisabled: {
      type: Boolean,
      value: false
    },
    shape: {
      type: String,
      value: 'round'
    }
  },
  data: {
    direction: '',
    parentDisabled: false
  },
  methods: {
    updateFromParent() {
      const [parent] = this.getRelationNodes('../checkbox-group/index');
      if (!parent) {
        return;
      }
      const {
        value,
        disabled: parentDisabled,
        direction
      } = parent.data;
      this.setData({
        inParentArrIdx: value.indexOf(this.data.name),
        direction,
        parentDisabled
      });
    },
    emitChange(value) {
      const [parent] = this.getRelationNodes('../checkbox-group/index');
      const maxItemNum = parseInt(parent.data.max);
      if (!parent) {
        return;
      }
      if (this.data.inParentArrIdx >= 0) {
        parent.data.value.splice(this.data.inParentArrIdx, 1);
      } else {
        if (maxItemNum > parent.data.value.length || maxItemNum === 0) {
          parent.data.value.push(value);
        }
      }
      parent.updateChildren();
    },
    onChange() {
      const {
        disabled,
        parentDisabled,
        name
      } = this.data;
      if (!disabled && !parentDisabled) {
        this.emitChange(name);
      }
    },
    onClickLabel() {
      const {
        disabled,
        parentDisabled,
        labelDisabled,
        name
      } = this.data;
      if (!(disabled || parentDisabled) && !labelDisabled) {
        this.emitChange(name);
      }
    }
  }
});