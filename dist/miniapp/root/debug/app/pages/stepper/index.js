define("pages/stepper/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){Page({
  data: {
    count: 3
  },
  onChange(e) {
    this.setData({ count: e.detail });
  }
});
}));