define("pages/slider/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){Page({
  data: {
    value: 50
  },
  onChange(e) {
    this.setData({ value: e.detail });
  }
});
}));