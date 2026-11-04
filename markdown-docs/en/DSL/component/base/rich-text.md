## rich-text

> Rich text.

| Property | Type           | Default Value | Required | Description               |
|:------|:-------------|:----|:---|:-----------------|
| nodes | Array/String | []  | No  | Node list/HTML String |
| space | String       |     | No  | Display consecutive spaces           |

### Valid values of space

| Valid Value | Description          |
|:-----|:------------|
| ensp | Half the size of a Chinese character space  |
| emsp | Size of a Chinese character space    |
| nbsp | Space size based on font settings |

### nodes

Two types of nodes are currently supported, distinguished by type: element nodes and text nodes. The default is the element node, which is the HTML node displayed in the rich text area

#### Element node: type = node

| Property   | Description    | Type     | Required | Remarks                       |
|:---------|:------|:-------|:---|:-------------------------|
| name     | Tag name   | String | Yes  | Supports some trusted HTML nodes         |
| attrs    | Attributes    | Object | No  | Supports some trusted attributes, following PascalCase naming convention |
| children | Child node list | Array  | No  | Same structure as nodes             |

#### Text node: type = text

| Property | Description | Type     | Required | Remarks          |
|:-----|:---|:-------|:---|:------------|
| text | Text | String | Yes  | Supports entities |

### Trusted HTML nodes and attributes

The class and style attributes are globally supported, **the id attribute is not supported**.

| Node         | Attributes                           |
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

### Sample Code

```html

<view>
  <rich-text nodes='<button>testButton</button>' space='nbsp'></rich-text>
</view>
```

### Bug & Tip

1. Using the String type for nodes is not recommended, as performance may degrade.
2. All node events are blocked inside the `rich-text` component.
3. The attrs attribute does not support id, but supports class.
4. The name attribute is case-insensitive.
5. If an untrusted HTML node is used, that node and all its child nodes will be removed.
6. If the `rich-text` component is used inside a custom component, only the mass styles of the custom component will take effect on the class within `rich-text`.
