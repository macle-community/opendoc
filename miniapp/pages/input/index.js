Page({
  data: {},

  Page({
  data: { currentVal: '' },
  onInputSync(e) { this.setData({ currentVal: e.detail.value }); }
}
});
