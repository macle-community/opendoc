## ma.createVideoContext(string id)

> 创建 video 上下文 VideoContext 对象。

### 参数

#### string id

video 组件的 id

### 返回值

#### VideoContext

VideoContext 对象。

### 示例代码
```html

<video
  id='myVideo'
  src='https://example.test.com/video'
/>
```

```js
Page ({
  onLoad () {
    this.videoContext = ma.createVideoContext ('myVideo');
  },
});
```
