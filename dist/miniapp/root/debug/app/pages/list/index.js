define("pages/list/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){Page({
  data: {},
  onLoad() {
    console.log('[List Page] onLoad');
  },
  handleClick(e) {
    ma.showToast({
      title: 'Item Clicked',
      icon: 'none'
    });
  }
});


}));