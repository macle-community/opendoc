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
    value: {
      type: Boolean,
      value: false,
      observer(val) {
        const [parent] = this.getRelationNodes('../checkbox-group/index');
        if (!parent) {
          this.setData({
            inParentArrIdx: val ? 0 : -1
          });
        }
      }
    },
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
  ready() {
    const [parent] = this.getRelationNodes('../checkbox-group/index');
    if (!parent) {
      const isChecked = Boolean(this.data.value || this.properties.value);
      this.setData({ inParentArrIdx: isChecked ? 0 : -1 });
    } else {
      this.updateFromParent();
    }
  },
  methods: {
    updateFromParent() {
      const [parent] = this.getRelationNodes('../checkbox-group/index');
      if (!parent) {
        return;
      }
      const rawVal = parent.data.value !== undefined ? parent.data.value : parent.properties.value;
      const value = Array.isArray(rawVal) ? rawVal : [];
      const parentDisabled = !!parent.data.disabled;
      const direction = parent.data.direction || '';
      this.setData({
        inParentArrIdx: value.indexOf(this.data.name),
        direction,
        parentDisabled
      });
    },
    emitChange(value) {
      const [parent] = this.getRelationNodes('../checkbox-group/index');
      if (!parent) {
        const currentChecked = this.data.inParentArrIdx >= 0 || this.data.value;
        const newVal = !currentChecked;
        this.setData({
          value: newVal,
          inParentArrIdx: newVal ? 0 : -1
        });
        this.triggerEvent('change', newVal);
        return;
      }
      const maxItemNum = parseInt(parent.data.max) || 0;
      const rawVal = parent.data.value !== undefined ? parent.data.value : parent.properties.value;
      const parentValue = Array.isArray(rawVal) ? [...rawVal] : [];
      const idx = parentValue.indexOf(value);
      if (idx >= 0) {
        parentValue.splice(idx, 1);
      } else {
        if (maxItemNum === 0 || maxItemNum > parentValue.length) {
          parentValue.push(value);
        }
      }
      parent.setData({ value: parentValue });
      parent.triggerEvent('change', parentValue);
      const children = parent.getRelationNodes('../checkbox/index');
      children.forEach(child => child.updateFromParent());
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
