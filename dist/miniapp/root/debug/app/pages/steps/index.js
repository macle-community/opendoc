define("pages/steps/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){Page({
  data: {
    active: 1,
    steps: [
      { text: 'Step 1', desc: 'Description 1' },
      { text: 'Step 2', desc: 'Description 2' },
      { text: 'Step 3', desc: 'Description 3' }
    ]
  },
  nextStep() {
    this.setData({ active: (this.data.active + 1) % 3 });
  }
});
}));