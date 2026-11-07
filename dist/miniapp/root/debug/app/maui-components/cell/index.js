define("maui-components/cell/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){"use strict";

var _component = require("../common/component");
(0, _component.MaComponent)({
  properties: {
    title: null,
    value: null,
    size: String,
    label: String,
    center: Boolean,
    required: Boolean,
    clickable: Boolean,
    titleWidth: String,
    customStyle: String,
    icon: String,
    border: {
      type: Boolean,
      value: true
    },
    titleStyle: String
  },
  methods: {
    onClick(event) {
      this.triggerEvent('click', event);
    }
  }
});
}));