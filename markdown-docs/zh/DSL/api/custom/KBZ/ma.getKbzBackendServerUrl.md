## ma.getKbzBackendServerUrl(Object object)

> 获取KBZ小程序服务地址

### 参数

#### Object object

| 属性      | 类型       | 默认值 | 必填 | 说明          |
|:--------|:---------|:----|:---|:------------|
| success | Function |     | 否  | 接口调用成功的回调函数 |
| fail    | Function |     | 否  | 接口调用失败的回调函数 |

#### object.success 回调函数

##### 参数

##### Object res

| 属性  | 类型     | 说明          |
|:----|:-------|:------------|
| url | String | KBZ 小程序服务地址 |

### 示例代码
```js
ma.getKbzBackendServerUrl({
  success: (res) => {
    console.log(res);
  }
});
```
