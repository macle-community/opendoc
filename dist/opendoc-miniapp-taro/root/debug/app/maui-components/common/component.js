define("maui-components/common/component.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){"use strict";

exports.__esModule = true;
exports.MaComponent = MaComponent;
function MaComponent(maOptions) {
  const options = Object.assign({}, maOptions);
  options.methods = options.methods || {};
  if (!options.methods.eh) {
    options.methods.eh = function(event) {
      if (typeof getCurrentPages === 'function') {
        const pages = getCurrentPages();
        const page = pages[pages.length - 1];
        if (page && typeof page.eh === 'function') {
          return page.eh(event);
        }
      }
    };
  }


  // add default externalClasses

  // add default behaviors

  // add default options

  Component(options);
}
}));