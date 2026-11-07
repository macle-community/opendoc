define("maui-components/switch/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){"use strict";

var _component = require("../common/component");
(0, _component.MaComponent)({
  field: true,
  properties: {
    checked: null,
    loading: {
      type: Boolean,
      value: false
    },
    activeColor: String,
    inactiveColor: String,
    disabled: {
      type: Boolean,
      value: false
    },
    size: {
      type: String,
      value: '30px'
    },
    activeValue: {
      type: null,
      value: true
    },
    inactiveValue: {
      type: null,
      value: false
    }
  },
  methods: {
    onClick() {
      const {
        activeValue,
        inactiveValue,
        disabled,
        loading
      } = this.data;
      if (disabled || loading) {
        return;
      }
      const checked = this.data.checked === activeValue;
      const value = checked ? inactiveValue : activeValue;
      this.triggerEvent('change', value);
    }
  }
});
}));