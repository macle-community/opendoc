define("maui-components/overlay/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){"use strict";

var _component = require("../common/component");
(0, _component.MaComponent)({
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    zIndex: {
      type: [String, Number],
      value: 1
    },
    duration: {
      type: [String, Number],
      value: 300
    },
    customStyle: {
      type: String,
      value: ''
    }
  },
  methods: {
    onClick: function onClick() {
      this.triggerEvent('click', '', {
        bubbles: true
      });
    },
    // 阻止内嵌组件冒泡，暂时不暴露给用户
    handleContentTap() {}
  }
});
}));