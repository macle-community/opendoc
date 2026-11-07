Page({
  data: {
  "volume": 50
},

  onSliderChange(e) { this.setData({ volume: e.detail.value }); }
});
