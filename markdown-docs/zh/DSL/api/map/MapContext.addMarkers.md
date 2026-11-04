## MapContext.addMarkers(Object object)

> 添加marker

### 参数

#### Object object

| 属性       | 类型       | 默认值   | 必填 | 说明                       |
|----------|----------|-------|----|--------------------------|
| markers  | Array    |       | 是  | 同传入map组件的marker属性        |
| clear    | Boolean  | false | 否  | 是否先清空地图上的所有marker        |
| success  | Function |       | 否  | 接口调用成功的回调函数              |
| fail     | Function |       | 否  | 接口调用失败的回调函数              |
| complete | Function |       | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

### 示例代码

```js
//maml
<button bindtap="addMarkers">addMarkers</button>

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
    ]
  },

  addMarkers() {
    let markerArr = [
      {
        id: 2,
        title: `marker2`,
        latitude: 32.130366,
        longitude: 118.995885,
      }
    ];
    this.setData({
      markers: markerArr,
    });
    this.mapContext.addMarkers({
      markers: markerArr,
      clear: true,
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
