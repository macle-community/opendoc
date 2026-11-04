## MASS

**MASS (Macle Style Sheets) is a set of style languages used to describe the component styles of MAML.**  
To accommodate the vast number of front-end developers, MASS has most of the features of CSS. At the same time, to be more suitable for developing mini programs, MASS has expanded and modified CSS.
Compared with CSS, the features expanded by MASS are:

- Size units
- Style imports

### Size units

- rpx (responsive pixel): can adapt automatically according to the screen width. The screen width is defined as 750rpx. For example, on iPhone6, the screen width is 375px, with a total of 750
  physical pixels, so 750rpx = 375px = 750 physical pixels, 1rpx = 0.5px = 1 physical pixel.

| Device        | rpx to px (screen width/750) | px to rpx (750/screen width) |
|:-------------|:---------------------|:---------------------|
| iPhone5      | 1rpx = 0.42px        | 1px = 2.34rpx        |
| iPhone6      | 1rpx = 0.5px         | 1px = 2rpx           |
| iPhone6 Plus | 1rpx = 0.552px       | 1px = 1.81rpx        |

> Suggestion: When developing a mini program, designers can use iPhone6 as the standard for the visual draft.

### Style imports

Use the @import statement to import external style sheets. @import is followed by the relative or absolute path of the external style sheet to be imported, and the statement ends with ;.

```
/** common.mass **/
.small-p {
  padding:5px;
}
```

```
/** app.mass **/
@import "common.mass";
.middle-p {
  padding:15px;
}
```

### Inline styles

The framework components support using the style and class attributes to control the style of components.

- style: Static styles should be written in class uniformly. style receives dynamic styles, which will be parsed at runtime. Please try to avoid writing static styles into style, so as not to affect the rendering speed.
  ```
  <view style="color:{{color}};" />
  ```
- class: Used to specify style rules. Its attribute value is a collection of class selector names (style class names) in the style rules. The style class name does not need to include ., and style class names are separated by spaces.
  ```
  <view class="normal_view" />
  ```

### Global styles and local styles

Styles defined in app.mass are global styles, which apply to every page. Styles defined in the mass file of a page are local styles, which only apply to the corresponding page, and will override
the same selectors in app.mass.

### Local resource image support

In versions after `25.3.0`, Macle supports developers using local resource images in mass files (in previous versions, only online addresses or base64 encoding were supported). The following is a simple example

```css
.yourClass {
  background-image: url('./yourLocalUrl.png');
}
```
