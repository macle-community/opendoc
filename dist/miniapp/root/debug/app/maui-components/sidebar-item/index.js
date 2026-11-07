define("maui-components/sidebar-item/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){"use strict";

var _component = require("../common/component");
var _relation = require("../common/relation");
(0, _component.MaComponent)({
  relations: (0, _relation.useParent)('sidebar'),
  properties: {
    dot: Boolean,
    badge: null,
    info: null,
    title: String,
    disabled: Boolean
  },
  methods: {
    onClick() {
      const [parent] = this.getRelationNodes('../sidebar/index');
      const children = parent.getRelationNodes('../sidebar-item/index');
      if (!parent || this.data.disabled) {
        return;
      }
      const index = children.indexOf(this);
      parent.setActive(index).then(() => {
        this.triggerEvent('click', index);
        parent.triggerEvent('change', index);
      });
    },
    setActive(selected) {
      return this.setData({
        selected
      });
    }
  }
});
}));