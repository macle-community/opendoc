## MapContext.removeMarkers(Object object)

> 移除marker

### 参数

#### Object object

| 属性        | 类型       | 默认值 | 必填 | 说明                       |
|-----------|----------|-----|----|--------------------------|
| markerIds | Array    |     | 是  | marker的id集合              |
| success   | Function |     | 否  | 接口调用成功的回调函数              |
| fail      | Function |     | 否  | 接口调用失败的回调函数              |
| complete  | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行） |

### 示例代码

```js
//maml
<button bindtap="removeMarkers">removeMarkers</button>

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

  removeMarkers() {
    this.mapContext.removeMarkers({
      markerIds: [0],
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
