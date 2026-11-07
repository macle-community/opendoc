define("maui-components/mixins/page-scroll.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){"use strict";

exports.__esModule = true;
exports.pageScrollMixin = pageScrollMixin;
var _validator = require("../common/validator");
var _utils = require("../common/utils");
function onPageScroll(event) {
  const {
    vanPageScroller = []
  } = (0, _utils.getCurrentPage)();
  vanPageScroller.forEach(scroller => {
    if (typeof scroller === 'function') {
      // @ts-ignore
      scroller(event);
    }
  });
}
function pageScrollMixin(scroller) {
  return new Behavior({
    attached() {
      const page = (0, _utils.getCurrentPage)();
      if (!(0, _validator.isDef)(page)) {
        return;
      }
      const _scroller = scroller.bind(this);
      const {
        vanPageScroller = []
      } = page;
      if ((0, _validator.isFunction)(page.onPageScroll) && page.onPageScroll !== onPageScroll) {
        vanPageScroller.push(page.onPageScroll.bind(page));
      }
      vanPageScroller.push(_scroller);
      page.vanPageScroller = vanPageScroller;
      page.onPageScroll = onPageScroll;
      this._scroller = _scroller;
    },
    detached() {
      const page = (0, _utils.getCurrentPage)();
      if (!(0, _validator.isDef)(page) || !(0, _validator.isDef)(page.vanPageScroller)) {
        return;
      }
      const {
        vanPageScroller
      } = page;
      const index = vanPageScroller.findIndex(v => v === this._scroller);
      if (index > -1) {
        page.vanPageScroller.splice(index, 1);
      }
      this._scroller = undefined;
    }
  });
}
}));