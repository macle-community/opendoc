Page({
  data: {
  "options": [
    {
      "value": "JS",
      "label": "JavaScript",
      "checked": true
    },
    {
      "value": "TS",
      "label": "TypeScript",
      "checked": true
    },
    {
      "value": "REACT",
      "label": "React / Taro"
    },
    {
      "value": "MAML",
      "label": "Native MAML"
    }
  ],
  "selectedList": "JS, TS"
},

  Page({
  data: {
    options: [
      { value: 'JS', label: 'JavaScript', checked: true },
      { value: 'TS', label: 'TypeScript', checked: true },
      { value: 'REACT', label: 'React / Taro' },
      { value: 'MAML', label: 'Native MAML' }
    ],
    selectedList: 'JS, TS'
  },
  onCheckboxChange(e) {
    this.setData({ selectedList: e.detail.value.join(', ') });
  }
});
