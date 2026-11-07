define("pages/switch/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){Page({
  data: {
  "isEnabled": true
},

  onSwitchToggle(e) {
    this.setData({ isEnabled: e.detail.value });
    ma.showToast({ title: e.detail.value ? 'Enabled' : 'Disabled', icon: 'none' });
  }
});

}));