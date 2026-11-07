define("pages/input/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){Page({
  data: {},

  Page({
  data: { currentVal: '' },
  onInputSync(e) { this.setData({ currentVal: e.detail.value }); }
}
});

}));