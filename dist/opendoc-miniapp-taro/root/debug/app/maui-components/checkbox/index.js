define("maui-components/checkbox/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){"use strict";

var _component = require("../common/component");
var _relation = require("../common/relation");

function getParent(ctx) {
  let [p] = ctx.getRelationNodes('../checkbox-group/index') || [];
  if (!p) {
    [p] = ctx.getRelationNodes('maui-checkbox-group') || [];
  }
  return p;
}

(0, _component.MaComponent)({
  field: true,
  relations: (0, _relation.useParent)('checkbox-group', function () {
    this.updateFromParent();
  }),
  properties: {
    name: null,
    value: {
      type: Boolean,
      value: false
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
    inParentArrIdx: -1,
    direction: '',
    parentDisabled: false
  },
  ready() {
    const parent = getParent(this);
    if (!parent) {
      const isChecked = Boolean(this.data.value || this.properties.value);
      this.setData({ inParentArrIdx: isChecked ? 0 : -1 });
    } else {
      this.updateFromParent();
    }
  },
  methods: {
    updateFromParent() {
      const parent = getParent(this);
      if (!parent) {
        return;
      }
      const rawVal = parent.data.value !== undefined ? parent.data.value : parent.properties.value;
      const value = Array.isArray(rawVal) ? rawVal : [];
      const parentDisabled = !!parent.data.disabled;
      const direction = parent.data.direction || '';
      const inParentArrIdx = value.indexOf(this.data.name);
      this.setData({
        inParentArrIdx,
        value: inParentArrIdx >= 0,
        direction,
        parentDisabled
      });
    },
    emitChange(value) {
      const parent = getParent(this);
      if (!parent) {
        const currentChecked = Boolean(this.data.value || this.properties.value || this.data.inParentArrIdx >= 0);
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
      let children = parent.getRelationNodes('../checkbox/index') || [];
      if (!children.length) {
        children = parent.getRelationNodes('maui-checkbox') || [];
      }
      children.forEach(child => child.updateFromParent && child.updateFromParent());
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

}));