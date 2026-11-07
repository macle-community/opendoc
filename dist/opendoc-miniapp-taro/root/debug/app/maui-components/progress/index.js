define("maui-components/progress/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){"use strict";

var _color = require("../common/color");
var _component = require("../common/component");
var _utils = require("../common/utils");
(0, _component.MaComponent)({
  properties: {
    inactive: Boolean,
    percentage: {
      type: Number,
      value: 0,
      observer: '_setLeft'
    },
    pivotText: String,
    pivotColor: String,
    trackColor: String,
    showPivot: {
      type: Boolean,
      value: true
    },
    color: {
      type: String,
      value: _color.BLUE
    },
    textColor: {
      type: String,
      value: '#fff'
    },
    strokeWidth: {
      type: null,
      value: 4
    }
  },
  data: {
    right: 0
  },
  ready: function () {
    this._setLeft();
  },
  methods: {
    _setLeft: function () {
      Promise.all([(0, _utils.getRect)(this, '.maui-progress'), (0, _utils.getRect)(this, '.maui-progress__pivot')]).then(([portion, pivot]) => {
        if (portion && pivot) {
          this.setData({
            right: pivot.width * (this.data.percentage - 100) / 100
          });
        }
      });
    }
  }
});
}));