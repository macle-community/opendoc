## Template

MAML provides templates (template). You can define code fragments in a template and then call them in different places.

### Defining a template

Use the name attribute as the name of the template. Then define the code fragment within `<template>`, for example:

```
<template name="msgItem">
  <view>
    <text> {{index}}: {{msg}} </text>
    <text> Time: {{time}} </text>
  </view>
</template>
```

### Using a template

Use the is attribute to declare the template to be used, and then pass in the data required by the template, for example:

```
<template is="msgItem" data="{{...item}}"/>
```

```
Page({
  data: {
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    }
  }
})
```

The is attribute can use Mustache syntax to dynamically determine which template to render:

```
<template name="odd">
  <view> odd </view>
</template>
<template name="even">
  <view> even </view>
</template>

<block ma:for="{{[1, 2, 3, 4, 5]}}">
  <template is="{{item % 2 == 0 ? 'even' : 'odd'}}"/>
</block>
```

## Template scope

Templates have their own scope and can only use the data passed in via data
