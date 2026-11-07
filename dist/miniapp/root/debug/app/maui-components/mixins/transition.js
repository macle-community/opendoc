define("maui-components/mixins/transition.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){"use strict";

exports.__esModule = true;
exports.default = void 0;
var _utils = require("../common/utils");
function getClassNames(name) {
  return {
    enter: 'maui-'.concat(name, '-enter maui-').concat(name, '-enter-active enter-class enter-active-class'),
    'enter-to': 'maui-'.concat(name, '-enter-to maui-').concat(name, '-enter-active enter-to-class enter-active-class'),
    leave: 'maui-'.concat(name, '-leave maui-').concat(name, '-leave-active leave-class leave-active-class'),
    'leave-to': 'maui-'.concat(name, '-leave-to maui-').concat(name, '-leave-active leave-to-class leave-active-class')
  };
}
const properties = {
  customClass: String,
  customStyle: String,
  show: {
    type: Boolean,
    value: false,
    observer: 'observeShow'
  },
  duration: {
    type: null,
    value: 300,
    observer: 'observeDuration'
  },
  name: {
    type: String,
    value: 'fade'
  },
  trigger: {
    type: Boolean,
    value: false
  }
};
var _default = exports.default = new Behavior({
  is: 'ma-transition',
  properties,
  data: {
    inited: false,
    display: false
  },
  ready: function ready() {
    if (this.data.show === true) {
      this.observeShow(true, false);
    }
  },
  methods: {
    observeShow: function observeShow(value, old) {
      if (value === old) {
        return;
      }
      value ? this.enter() : this.leave();
    },
    enter: function enter() {
      const _this = this;
      const _a = this.data;
      const {
        name
      } = _a;
      const classNames = getClassNames(name);
      this.status = 'Enter';
      this.data.trigger && this.triggerEvent('beforeEnter', '', {
        bubbles: true
      });
      (0, _utils.requestAnimationFrame)(() => {
        if (_this.status !== 'Enter') {
          return;
        }
        _this.data.trigger && _this.triggerEvent('enter', '', {
          bubbles: true
        });
        _this.setData({
          inited: true,
          display: true
        });
        (0, _utils.requestAnimationFrame)(() => {
          if (_this.status !== 'Enter') {
            return;
          }
          _this.transitionEnded = false;
          _this.onTransitionEnd();
          _this.setData({
            classes: classNames['enter-to']
          });
        });
      });
    },
    leave: function leave() {
      const _this = this;
      if (!this.data.display) {
        return;
      }
      const _a = this.data;
      const {
        name
      } = _a;
      const classNames = getClassNames(name);
      this.status = 'Leave';
      this.data.trigger && this.triggerEvent('beforeLeave', '', {
        bubbles: true
      });
      (0, _utils.requestAnimationFrame)(() => {
        if (_this.status !== 'Leave') {
          return;
        }
        _this.data.trigger && _this.triggerEvent('leave', '', {
          bubbles: true
        });
        (0, _utils.requestAnimationFrame)(() => {
          if (_this.status !== 'Leave') {
            return;
          }
          _this.transitionEnded = false;
          _this.onTransitionEnd();
          _this.setData({
            classes: classNames['leave-to']
          });
        });
      });
    },
    onTransitionEnd: function onTransitionEnd() {
      if (this.transitionEnded) {
        return;
      }
      this.transitionEnded = true;
      this.data.trigger && this.triggerEvent('after'.concat(this.status), '', {
        bubbles: true
      });
      const {
        show,
        display
      } = this.data;
      if (!show && display) {
        this.setData({
          display: false
        });
      }
    }
  }
});
}));