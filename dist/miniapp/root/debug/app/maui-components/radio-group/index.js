define("maui-components/radio-group/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){"use strict";

var _component = require("../common/component");
var _relation = require("../common/relation");
(0, _component.MaComponent)({
  field: true,
  relations: (0, _relation.useChildren)('radio', function (target) {
    if (target && target.updateFromParent) target.updateFromParent();
  }),
  properties: {
    value: {
      type: null,
      observer: 'updateChildren'
    },
    direction: String,
    disabled: {
      type: Boolean,
      observer: 'updateChildren'
    }
  },
  ready() {
    this.updateChildren();
  },
  methods: {
    updateChildren() {
      let children = this.getRelationNodes('../radio/index') || [];
      if (!children.length) {
        children = this.getRelationNodes('maui-radio') || [];
      }
      children.forEach(child => child.updateFromParent && child.updateFromParent());
    }
  }
});

}));