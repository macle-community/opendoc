define("maui-components/modal/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){"use strict";

var _component = require("../common/component");
(0, _component.MaComponent)({
  properties: {
    bodyClassName: {
      type: String,
      value: ''
    },
    bodyStyle: {
      type: String,
      value: ''
    },
    cancelButtonStyle: {
      type: String,
      value: ''
    },
    cancelButtonText: {
      type: String,
      value: ''
    },
    className: {
      type: String,
      value: ''
    },
    closable: Boolean,
    content: {
      type: String,
      value: ''
    },
    destroyOnClose: {
      type: Boolean,
      value: false
    },
    maskClosable: {
      type: Boolean,
      value: true
    },
    maskStyle: {
      type: String,
      value: ''
    },
    primaryButtonStyle: {
      type: String,
      value: ''
    },
    primaryButtonText: {
      type: String,
      value: ''
    },
    secondaryButtonStyle: {
      type: String,
      value: ''
    },
    secondaryButtonText: {
      type: String,
      value: ''
    },
    style: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    type: {
      type: String,
      value: 'default'
    },
    visible: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    onClose() {
      this.triggerEvent('close', '', {
        bubbles: true
      });
    },
    onMaskClose() {
      if (this.data.maskClosable) {
        this.triggerEvent('close', '', {
          bubbles: true
        });
      }
    },
    onPrimaryButtonTap() {
      this.triggerEvent('primaryButtonTap', '', {
        bubbles: true
      });
    },
    onSecondaryButtonTap() {
      this.triggerEvent('secondaryButtonTap', '', {
        bubbles: true
      });
    },
    onCancelButtonTap() {
      this.triggerEvent('cancelButtonTap', '', {
        bubbles: true
      });
    }
  }
});
}));