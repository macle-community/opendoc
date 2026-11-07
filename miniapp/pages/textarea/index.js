Page({
  data: {
  "charLen": 0
},

  onTextareaInput(e) { this.setData({ charLen: (e.detail.value || '').length }); }
});
