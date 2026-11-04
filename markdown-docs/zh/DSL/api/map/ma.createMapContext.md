## ma.createMapContext(string mapId)

> 创建map上下文MapContext对象。

### 参数

**string** **mapId**

map组件的id

### 返回值

MapContext



### 示例代码

```js
//maml
<map id="myMap"></map>

//js
onReady() {
  this.mapContext = ma.createMapContext('myMap');
},
```

