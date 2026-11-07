define("pages/checkbox/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){Page({
  data: {
    checked: true,
    checkedSquare: true,
    groupVal: ['a', 'b']
  },
  onChange(e) {
    this.setData({ checked: e.detail });
  },
  onSquareChange(e) {
    this.setData({ checkedSquare: e.detail });
  },
  onGroupChange(e) {
    this.setData({ groupVal: e.detail });
  }
});
}));