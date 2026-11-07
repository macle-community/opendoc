Page({
  data: {},

  Page({
  onFormSubmit(e) {
    ma.showModal({ title: 'Form Submitted', content: JSON.stringify(e.detail.value), showCancel: false });
  },

  onFormReset() {
    ma.showToast({ title: 'Form Reset', icon: 'none' });
  }
});
