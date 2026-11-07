define("maui-components/sidebar/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){"use strict";

var _component = require("../common/component");
var _relation = require("../common/relation");
(0, _component.MaComponent)({
  relations: (0, _relation.useChildren)('sidebar-item', function () {
    this.setActive(this.data.activeKey);
  }),
  properties: {
    activeKey: {
      type: Number,
      value: 0,
      observer: 'setActive'
    }
  },
  methods: {
    setActive(chooseKey) {
      const children = this.getRelationNodes('../sidebar-item/index');
      const {
        activeKey
      } = this.properties;
      if (children && !children.length) {
        return Promise.resolve();
      }
      this.properties.activeKey = chooseKey;
      const stack = [];
      if (activeKey !== chooseKey && children[activeKey]) {
        stack.push(children[activeKey].setActive(false));
      }
      if (children[chooseKey]) {
        stack.push(children[chooseKey].setActive(true));
      }
      return Promise.all(stack);
    }
  }
});
}));