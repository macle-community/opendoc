## MapContext.moveToLocation(Object object)

> 若未传入经纬度时调用，将申请获取用户当前位置，并在用户授权后移动到用户当前位置；若未传入经纬度且无用户授权定位，不会改变位置,并会触发失败回调

### 参数

#### Object object

| 属性        | 类型       | 默认值 | 必填 | 说明                       |
|-----------|----------|-----|----|--------------------------|
| longitude | Number   |     | 否  | 经度                       |
| latitude  | Number   |     | 否  | 纬度                       |
| success   | Function |     | 否  | 接口调用成功的回调函数              |
| fail      | Function |     | 否  | 接口调用失败的回调函数              |
| complete  | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

### 示例代码

```js
//maml
<button bindtap="moveToLocation">moveToLocation</button>

//js
Page({
  data: {
    markers: [
      {
        id: 0,
        title: 'marker0',
        latitude: 31.984686,
        longitude: 118.574979,
        width: 10,
        height: 15,
        anchor: { x: 0.5, y: 0.5 },
      },
    ],
    latitude: 31.97934,
    longitude: 118.7673113,
    markersIndex: 1,
  },

  moveToSpecialLocation() {
    this.mapContext.moveToLocation({
      longitude: 118.79205,
      latitude: 32.03237,
      success(res) {
        ma.showModal({
          content: res.errMsg,
        });
      },
      fail(res) {
        ma.showModal({
          content: res.errMsg,
        });
      },
    });
  },
  moveToLocation() {
    this.mapContext.moveToLocation({
      success(res) {
        ma.showModal({
          content: res.errMsg,
        });
      },
      fail(res) {
        ma.showModal({
          content: res.errMsg,
        });
      },
    });
  },
});
```
