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

```html

<view>
  <text userSelect=false space="nbsp">Chinese character space nbsp</text>
</view>
```

### Bug & Tip

1. decode can parse `&nbsp; &lt; &gt; &amp; &apos; &ensp; &emsp;`
2. The space standards of different operating systems are not consistent.
3. Only text nesting is supported inside the text component.
4. Nodes other than text nodes cannot be selected by long press.
