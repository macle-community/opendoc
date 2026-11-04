## ma.navigateTo(Object object)

> 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 ma.navigateBack 可以返回到原页面。小程序中页面栈最多十层。

### 参数

**Object object**

| 属性       | 类型       | 默认值 | 必填 | 说明                                                                                                               |
|:---------|:---------|:----|:---|:-----------------------------------------------------------------------------------------------------------------|
| url      | String   |     | 是  | 需要跳转的应用内非 tabBar 的页面的路径 (代码包路径), 路径后可以带参数。参数与路径之间使用 ? 分隔，参数键与参数值用 = 相连，不同参数用 & 分隔；如 'path?key=value&key2=value2' |
| event    | Object   |     | 否  | 页面间通信接口，用于监听被打开页面发送到当前页面的数据。                                                                                     |
| success  | Function |     | 否  | 接口调用成功的回调函数                                                                                                      |
| fail     | Function |     | 否  | 接口调用失败的回调函数                                                                                                      |
| complete | Function |     | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）                                                                                         |

### 示例代码

```js
ma.navigateTo({
  url: 'example?id=1',
  events: {
    // 给指定事件添加一个监听器，得到被打开页面传送到当前页面的数据
    acceptDataFromOpenedPage: function(data) {
      console.log(data)
    },
    someEvent: function(data) {
      console.log(data)
    },
    ...
  },
  success: function(res) {
    // 通过eventChannel向被打开页面传送数据
    res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'example' })
  }
})
```

```javascript
//example.js
Page({
  onLoad: function (option) {
    console.log(option.query);
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.emit('acceptDataFromOpenedPage', { data: 'example' });
    eventChannel.emit('someEvent', { data: 'example' });
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function (data) {
      console.log(data);
    });
  }
});
```
