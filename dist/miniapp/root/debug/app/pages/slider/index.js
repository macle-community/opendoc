define("pages/slider/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){Page({
  data: {},

  Page({
  data: { volume: 50 },
  onSliderChange(e) { this.setData({ volume: e.detail.value }); }
}
});

}));