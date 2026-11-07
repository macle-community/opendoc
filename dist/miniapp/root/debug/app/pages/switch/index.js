define("pages/switch/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){Page({
  data: {
    checked: true
  },
  onSwitchChange(e) {
    this.setData({ checked: e.detail });
  }
});
}));