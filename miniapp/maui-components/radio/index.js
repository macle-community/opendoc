"use strict";

var _component = require("../common/component");
var _relation = require("../common/relation");
(0, _component.MaComponent)({
  field: true,
  relations: (0, _relation.useParent)('radio-group', function () {
    this.updateFromParent();
  }),
  properties: {
    name: null,
    value: null,
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
    this.updateFromParent();
  },
  methods: {
    updateFromParent() {
      const [parentRadio] = this.getRelationNodes('../radio-group/index');
      if (!parentRadio) {
        return;
      }
      const rawVal = parentRadio.data.value !== undefined ? parentRadio.data.value : parentRadio.properties.value;
      const parentDisabled = !!parentRadio.data.disabled;
      const direction = parentRadio.data.direction || '';
      this.setData({
        value: rawVal,
        direction,
        parentDisabled
      });
    },
    emitChange(val) {
      const [parent] = this.getRelationNodes('../radio-group/index');
      if (parent) {
        parent.setData({ value: val });
        parent.triggerEvent('change', val);
        const children = parent.getRelationNodes('../radio/index');
        children.forEach(child => child.setData({ value: val }));
      } else {
        this.setData({ value: val });
        this.triggerEvent('change', val);
      }
    },
    onChange() {
      const {
        parentDisabled,
        disabled,
        name
      } = this.data;
      if (!disabled && !parentDisabled) {
        this.emitChange(name);
      }
    },
    onClickLabel() {
      const {
        labelDisabled,
        disabled,
        parentDisabled,
        name
      } = this.data;
      if (!(disabled || parentDisabled) && !labelDisabled) {
        this.emitChange(name);
      }
    }
  }
});
