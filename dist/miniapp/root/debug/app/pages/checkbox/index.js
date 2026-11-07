define("pages/checkbox/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){Page({
  data: {},

  Page({
  data: { isAgree: true },
  onAgreeChange(e) {
    this.setData({ isAgree: !this.data.isAgree });
  }
});

}));