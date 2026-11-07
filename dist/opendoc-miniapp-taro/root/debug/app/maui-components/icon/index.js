define("maui-components/icon/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){"use strict";

var _component = require("../common/component");
(0, _component.MaComponent)({
  properties: {
    dot: {
      type: Boolean,
      value: false
    },
    info: null,
    size: {
      type: String,
      value: '1em'
    },
    color: {
      type: String,
      value: '#2c2c2c'
    },
    customStyle: String,
    classPrefix: {
      type: String,
      value: 'maui-icon'
    },
    name: String
  },
  methods: {
    onClick() {
      this.triggerEvent('click');
    }
  }
});
}));