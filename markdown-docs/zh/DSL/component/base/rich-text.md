## rich-text

> 富文本。

| 属性    | 类型           | 默认值 | 必填 | 说明               |
|:------|:-------------|:----|:---|:-----------------|
| nodes | Array/String | []  | 否  | 节点列表/HTML String |
| space | String       |     | 否  | 显示连续空格           |

### space 的合法值

| 合法值  | 说明          |
|:-----|:------------|
| ensp | 中文字符空格一半大小  |
| emsp | 中文字符空格大小    |
| nbsp | 根据字体设置的空格大小 |

### nodes

现支持两种节点，通过 type 来区分，分别是元素节点和文本节点，默认是元素节点，在富文本区域里显示的 HTML 节点

#### 元素节点：type = node

| 属性       | 说明    | 类型     | 必填 | 备注                       |
|:---------|:------|:-------|:---|:-------------------------|
| name     | 标签名   | String | 是  | 支持部分受信任的 HTML 节点         |
| attrs    | 属性    | Object | 否  | 支持部分受信任的属性，遵循 Pascal 命名法 |
| children | 子节点列表 | Array  | 否  | 结构和 nodes 一致             |

#### 文本节点：type = text

| 属性   | 说明 | 类型     | 必填 | 备注          |
|:-----|:---|:-------|:---|:------------|
| text | 文本 | String | 是  | 支持 entities |

### 受信任的 HTML 节点及属性

全局支持 class 和 style 属性，**不支持 id 属性**。

| 节点         | 属性                           |
|:-----------|:-----------------------------|
| a          |                              |
| abbr       |                              |
| address    |                              |
| article    |                              |
| aside      |                              |
| b          |                              |
| bdi        |                              |
| bdo        | dir                          |
| big        |                              |
| blockquote |                              |
| br         |                              |
| caption    |                              |
| center     |                              |
| cite       |                              |
| code       |                              |
| col        | span，width                   |
| colgroup   | span，width                   |
| dd         |                              |
| del        |                              |
| div        |                              |
| dl         |                              |
| dt         |                              |
| em         |                              |
| fieldset   |                              |
| font       |                              |
| footer     |                              |
| h1         |                              |
| h2         |                              |
| h3         |                              |
| h4         |                              |
| h5         |                              |
| h6         |                              |
| header     |                              |
| hr         |                              |
| i          |                              |
| img        | alt，src，height，width         |
| ins        |                              |
| label      |                              |
| legend     |                              |
| li         |                              |
| mark       |                              |
| nav        |                              |
| ol         | start，type                   |
| p          |                              |
| pre        |                              |
| q          |                              |
| rt         |                              |
| ruby       |                              |
| s          |                              |
| section    |                              |
| small      |                              |
| span       |                              |
| strong     |                              |
| sub        |                              |
| sup        |                              |
| table      | width                        |
| tbody      |                              |
| td         | colspan，height，rowspan，width |
| tfoot      |                              |
| th         | colspan，height，rowspan，width |
| thead      |                              |
| tr         | colspan，height，rowspan，width |
| tt         |                              |
| u          |                              |
| ul         |                              |

### 示例代码

#### 1. HTML 字符串富文本渲染

```html
<rich-text nodes="{{htmlSnippet}}" space="nbsp" />
```

```js
Page({
  data: {
    htmlSnippet: '<div style="background:#eff6ff;padding:12px;border-radius:8px;"><h4 style="color:#1d4ed8;margin:0 0 6px 0;">Macle HTML RichText</h4><p style="color:#334155;font-size:13px;margin:0;">Render formatted HTML strings with <b>bold tags</b> and <span style="color:#ef4444;">colored highlights</span>.</p></div>'
  }
});
```

```css
rich-text { display: block; }
```

#### 2. 节点对象数组富文本

```html
<rich-text nodes="{{nodeArray}}" />
```

```js
Page({
  data: {
    nodeArray: [{
      name: 'div',
      attrs: { class: 'custom-node-box', style: 'color:#059669;font-weight:bold;font-size:14px;' },
      children: [{ type: 'text', text: '✓ Rendered via Structured Node Array' }]
    }]
  }
});
```

```css
.custom-node-box { padding: 8px; }
```


### Bug & Tip

1. nodes 不推荐使用 String 类型，性能会有所下降。
2. `rich-text` 组件内屏蔽所有节点的事件。
3. attrs 属性不支持 id ，支持 class 。
4. name 属性大小写不敏感。
5. 如果使用了不受信任的 HTML 节点，该节点及其所有子节点将会被移除。
6. 如果在自定义组件中使用 `rich-text` 组件，那么仅自定义组件的 mass 样式对 `rich-text` 中的 class 生效。
