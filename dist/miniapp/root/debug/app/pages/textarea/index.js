define("pages/textarea/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){Page({
  data: {},

  Page({
  data: { charLen: 0 },
  onTextareaInput(e) { this.setData({ charLen: (e.detail.value || '').length }); }
}
});

}));