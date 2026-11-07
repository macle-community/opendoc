define("pages/picker/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){Page({
  data: {
  "fruits": [
    "Apple",
    "Banana",
    "Orange",
    "Strawberry"
  ],
  "fruitIdx": 0,
  "multiRange": [
    [
      "Asia",
      "Europe",
      "Americas"
    ],
    [
      "China",
      "Japan",
      "Korea"
    ]
  ],
  "multiIdx": [
    0,
    0
  ],
  "selectedDate": "2026-11-07"
},

  onFruitChange(e) { this.setData({ fruitIdx: e.detail.value }); },

  onMultiChange(e) { this.setData({ multiIdx: e.detail.value }); },

  onDateChange(e) { this.setData({ selectedDate: e.detail.value }); }
});

}));