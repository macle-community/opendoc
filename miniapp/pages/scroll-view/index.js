Page({
  data: {},

  onScrollToUpper() { ma.showToast({ title: 'Top Reached', icon: 'none' }); },

  onScrollToLower() { ma.showToast({ title: 'Bottom Reached', icon: 'none' }); }
});
