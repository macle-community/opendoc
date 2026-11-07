Page({
  data: {},

  Page({
  data: { animPercent: 40 },
  increaseProgress() {
    let next = this.data.animPercent + 20;
    if (next > 100) next = 20;
    this.setData({ animPercent: next });
  }
});
