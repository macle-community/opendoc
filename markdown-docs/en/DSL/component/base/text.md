## text

> Text.

| Property      | Type      | Default Value | Required | Description                               |
|:------------|:--------|:------|:---|:---------------------------------|
| user-select | Boolean | false | No  | Whether the text is selectable. This property causes the text node to be displayed as inline-block |
| space       | String  |       | No  | Display consecutive spaces                           |
| decode      | Boolean | false | No  | Whether to decode                             |

### Valid values of space

| Value    | Description          |
|:-----|:------------|
| ensp | Half the size of a Chinese character space  |
| emsp | Size of a Chinese character space    |
| nbsp | Space size based on font settings |

### Sample Code

#### 1. Basic Text & Selectable Text

```html
<view class="text-group">
  <text class="text-headline">Standard Headline Text</text>
  <text class="text-sub">Regular secondary description text paragraph.</text>
  <text selectable="true" class="text-selectable">This text is selectable (user-select / selectable=true)</text>
</view>
```

```js
Page({ data: {} });
```

```css
.text-group { display: flex; flex-direction: column; gap: 8px; }
.text-headline { font-size: 17px; font-weight: 700; color: #0f172a; }
.text-sub { font-size: 13px; color: #64748b; }
.text-selectable { font-size: 13px; color: #2563eb; background: #eff6ff; padding: 6px 10px; border-radius: 6px; border: 1px dashed #bfdbfe; }
```

#### 2. Continuous Space Display (ensp, emsp, nbsp)

```html
<view class="text-group">
  <text space="ensp">Half-width   space   (ensp)</text>
  <text space="emsp">Full-width   space   (emsp)</text>
  <text space="nbsp">Non-breaking   space   (nbsp)</text>
</view>
```

```js
Page({ data: {} });
```

```css
.text-group text { font-size: 14px; color: #334155; }
```


### Bug & Tip

1. decode can parse `&nbsp; &lt; &gt; &amp; &apos; &ensp; &emsp;`
2. The space standards of different operating systems are not consistent.
3. Only text nesting is supported inside the text component.
4. Nodes other than text nodes cannot be selected by long press.
