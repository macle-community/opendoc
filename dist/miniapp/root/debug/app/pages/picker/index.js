define("pages/picker/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){Page({
  data: {
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
  ]
},

  Page({
  data: { fruits: ['Apple', 'Banana', 'Orange', 'Strawberry'], fruitIdx: 0 },
  onFruitChange(e) { this.setData({ fruitIdx: e.detail.value }); }
},

  Page({
  data: {
    multiRange: [['Asia', 'Europe', 'Americas'], ['China', 'Japan', 'Korea']],
    multiIdx: [0, 0]
  },
  onMultiChange(e) { this.setData({ multiIdx: e.detail.value }); }
},

  Page({
  data: { selectedDate: '2026-11-07' },
  onDateChange(e) { this.setData({ selectedDate: e.detail.value }); }
}
});

}));