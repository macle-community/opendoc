## ma.connectSocket(Object object)

> 创建一个 WebSocket 连接。

### 参数

#### Object object

| 属性                | 类型       | 默认值   | 必填 | 说明                               |
|:------------------|:---------|:------|:---|:---------------------------------|
| url               | String   |       | 是  | 开发者服务器 wss/ws 接口地址               |
| header            | Object   |       | 否  | HTTP Header，Header 中不能设置 Referer |
| protocols         | Array    |       | 否  | 子协议数组                            |
| tcpNoDelay        | Boolean  | false | 否  | 建立 TCP 连接的时候的 TCP_NODELAY 设置     |
| perMessageDeflate | Boolean  | false | 否  | 是否开启压缩扩展                         |
| timeout           | Number   |       | 否  | 超时时间，单位为毫秒                       |
| success           | Function |       | 否  | 接口调用成功的回调函数                      |
| fail              | Function |       | 否  | 接口调用失败的回调函数                      |
| complete          | Function |       | 否  | 接口调用结束的回调函数（调用成功、失败都会执行）         |

### 示例代码

```js
    ma.connectSocket({
      url: 'wss://example.com',
      header:{
         'content-type': 'application/json'
      },
      protocols: ['protocol1']
    })
```

### Bug & Tip

1. tip: 目前不会进行安全域的校验，建议优先使用 wss
2. tip: 当前wss无证书校验，需要在`MacleEventHandler`接口实现中提供证书校验能力

