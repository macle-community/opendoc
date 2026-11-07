define("pages/checkbox-group/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){Page({
  data: {
  "options": [
    {
      "value": "JS",
      "label": "JavaScript",
      "checked": true
    },
    {
      "value": "TS",
      "label": "TypeScript",
      "checked": true
    },
    {
      "value": "REACT",
      "label": "React / Taro"
    },
    {
      "value": "MAML",
      "label": "Native MAML"
    }
  ],
  "selectedList": "JS, TS"
},

  onCheckboxChange(e) {
    this.setData({ selectedList: e.detail.value.join(', ') });
  }
});

}));