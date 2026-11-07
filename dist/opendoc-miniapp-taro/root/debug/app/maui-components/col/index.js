define("maui-components/col/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){"use strict";

var _component = require("../common/component");
var _relation = require("../common/relation");
(0, _component.MaComponent)({
  relations: (0, _relation.useParent)('row'),
  properties: {
    span: Number,
    offset: Number
  },
  data: {
    gutter: 0
  }
});
}));