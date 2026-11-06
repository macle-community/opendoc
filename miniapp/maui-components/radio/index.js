"use strict";

var _component = require("../common/component");
var _relation = require("../common/relation");

function getParent(ctx) {
  let [p] = ctx.getRelationNodes('../radio-group/index') || [];
  if (!p) {
    [p] = ctx.getRelationNodes('maui-radio-group') || [];
  }
  return p;
}

(0, _component.MaComponent)({
  field: true,
  relations: (0, _relation.useParent)('radio-group', function () {
    this.updateFromParent();
  }),
  properties: {
    name: {
      type: null,
      value: undefined
    },
    value: {
      type: null,
      value: null,
      observer(newVal) {
        if (newVal !== undefined) {
          this.setData({ value: newVal });
        }
      }
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
    const parentRadio = getParent(this);
    if (!parentRadio) {
      const val = this.data.value !== undefined ? this.data.value : this.properties.value;
      if (val !== undefined && val !== null) {
        this.setData({ value: val });
      }
    } else {
      this.updateFromParent();
    }
  },
  methods: {
    updateFromParent() {
      const parentRadio = getParent(this);
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
      const parent = getParent(this);
      if (parent) {
        parent.setData({ value: val });
        parent.triggerEvent('change', val);
        let children = parent.getRelationNodes('../radio/index') || [];
        if (!children.length) {
          children = parent.getRelationNodes('maui-radio') || [];
        }
        children.forEach(child => child.setData({ value: val }));
      }
      this.setData({ value: val });
      this.triggerEvent('change', val, { bubbles: true, composed: true });
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
