Page({
  data: {
  "years": [
    2024,
    2025,
    2026,
    2027
  ],
  "months": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "days": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    15,
    20,
    25,
    30
  ],
  "val": [
    2,
    10,
    6
  ],
  "year": 2026,
  "month": 11,
  "day": 7
},

  onPickerViewChange(e) {
    const val = e.detail.value;
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    });
  }
});
