define("pages/form/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){Page({
  data: {},

  onFormSubmit(e) {
    ma.showModal({ title: 'Form Submitted', content: JSON.stringify(e.detail.value), showCancel: false });
  },

  onFormReset() {
    ma.showToast({ title: 'Form Reset', icon: 'none' });
  }
});

}));