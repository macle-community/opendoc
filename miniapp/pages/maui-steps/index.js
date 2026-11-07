
Page({
  data: { activeStep: 1, steps: [{ text: 'Step 1', desc: 'Description 1' }, { text: 'Step 2', desc: 'Description 2' }, { text: 'Step 3', desc: 'Description 3' }] },
  openModal() { this.setData({ showModal: true }); },
  closeModal() { this.setData({ showModal: false }); },
  openOverlay() { this.setData({ showOverlay: true }); },
  closeOverlay() { this.setData({ showOverlay: false }); },
  openBottom() { this.setData({ showBottom: true }); },
  closeBottom() { this.setData({ showBottom: false }); },
  openTop() { this.setData({ showTop: true }); },
  closeTop() { this.setData({ showTop: false }); },
  showPrompt() { const d = this.selectComponent('#maui-dialog'); if (d) d.alert({ title: 'Title', message: 'Message Prompt Body' }); },
  showConfirm() { const d = this.selectComponent('#maui-dialog'); if (d) d.confirm({ title: 'Confirm', message: 'Confirm action?' }); },
  showTextToast() { const t = this.selectComponent('#maui-toast'); if (t) t.text('Text toast message'); },
  showLoadingToast() { const t = this.selectComponent('#maui-toast'); if (t) t.loading({ message: 'Loading...', duration: 2000 }); }
});
