define("pages/progress/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){Page({
  data: {
  "animPercent": 40
},

  increaseProgress() {
    let next = this.data.animPercent + 20;
    if (next > 100) next = 20;
    this.setData({ animPercent: next });
  }
});

}));