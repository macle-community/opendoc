Page({
  data: {},
  onLoad() {
    console.log('[List Page] onLoad');
  },
  handleClick(e) {
    ma.showToast({
      title: 'Item Clicked',
      icon: 'none'
    });
  }
});

