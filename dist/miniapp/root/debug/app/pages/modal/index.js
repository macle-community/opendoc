define("pages/modal/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){Page({
  data: {
    currentModal: ''
  },
  showModal(e) {
    const val = e.currentTarget.dataset['modalValue'];
    this.setData({
      currentModal: val
    });
  },
  handleClose() {
    this.setData({ currentModal: '' });
  },
  primaryButtonTap() {
    ma.showToast({ title: 'Primary Button Tap', icon: 'none' });
    this.setData({ currentModal: '' });
  },
  secondaryButtonTap() {
    ma.showToast({ title: 'Secondary Button Tap', icon: 'none' });
    this.setData({ currentModal: '' });
  },
  cancelButtonTap() {
    ma.showToast({ title: 'Cancel Button Tap', icon: 'none' });
    this.setData({ currentModal: '' });
  }
});


}));