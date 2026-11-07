define("pages/radio-group/index.js",(function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit){Page({
  data: {
  "plans": [
    {
      "id": "free",
      "name": "Free Tier",
      "price": "$0"
    },
    {
      "id": "pro",
      "name": "Pro Plan",
      "price": "$19/mo"
    },
    {
      "id": "team",
      "name": "Team Enterprise",
      "price": "$49/mo"
    }
  ],
  "currentPlan": "pro"
},

  Page({
  data: {
    plans: [
      { id: 'free', name: 'Free Tier', price: '$0' },
      { id: 'pro', name: 'Pro Plan', price: '$19/mo' },
      { id: 'team', name: 'Team Enterprise', price: '$49/mo' }
    ],
    currentPlan: 'pro'
  },
  onRadioChange(e) { this.setData({ currentPlan: e.detail.value }); }
}
});

}));