define("pages/toast/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){Page({
  data: {},
  showSuccess() {
    ma.showToast({ title: 'Success!', icon: 'success' });
  },
  showInfo() {
    ma.showToast({ title: 'Information message', icon: 'none' });
  }
});
}));