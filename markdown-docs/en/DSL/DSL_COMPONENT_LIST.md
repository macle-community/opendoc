# DSL Mini Program Basic Component List

> This file summarizes all available basic components of the DSL mini program for quick retrieval. For detailed properties, events, default values, and examples, please refer to the detail file of each component. Components are organized by purpose, and can be used in MAML templates by their corresponding tag names.

## View containers (view)

| Component Name | Component Brief Description | Component Detail Path |
|:--|:--|:--|
| view | View container, equivalent to the div of the web | component/view/view.md |
| scroll-view | Scrollable view area. When using vertical scrolling, you need to give the scroll-view a fixed height (set height via MASS). The length unit for component properties defaults to px | component/view/scroll-view.md |
| swiper | Slider view container. Only swiper-item components can be placed inside, otherwise it will lead to undefined behavior | component/view/swiper.md |
| swiper-item | Can only be placed in the swiper component. Width and height are automatically set to 100% | component/view/swiper-item.md |
| cover-view | A text view covering native components | component/view/cover-view.md |
| cover-image | An image view covering native components. If all native components already support same-layer rendering, it is recommended to use image instead | component/view/cover-image.md |

## Basic content (base)

| Component Name | Component Brief Description | Component Detail Path |
|:--|:--|:--|
| text | Text | component/base/text.md |
| icon | Icon. The length unit for component properties defaults to px | component/base/icon.md |
| progress | Progress bar | component/base/progress.md |
| rich-text | Rich text | component/base/rich-text.md |

## Form components (form)

| Component Name | Component Brief Description | Component Detail Path |
|:--|:--|:--|
| button | Button, used to trigger an action | component/form/button.md |
| form | Form, submits the user input switch, input, checkbox, slider, radio, picker within the component | component/form/form.md |
| input | Input box. This component is a native component. Please note the relevant restrictions when using it | component/form/input.md |
| textarea | Multi-line input box. This component is a native component. Please note the relevant restrictions when using it. Note: Currently it is a web implementation, not native, so some properties are not yet supported | component/form/textarea.md |
| label | Used to improve the usability of form components. Use the for attribute to find the corresponding id, or place the control under this tag. When clicked, the corresponding control will be triggered | component/form/label.md |
| picker | A scrolling selector that pops up from the bottom | component/form/picker.md |
| picker-view | A scrolling selector embedded in the page. Only picker-view-column components can be placed inside it; other nodes will not be displayed | component/form/picker-view.md |
| picker-view-column | A child item of the scrolling selector. It can only be placed inside a picker-view. The height of its child nodes will be automatically set to match the height of the picker-view's selection box | component/form/picker-view-column.md |
| radio | Single-choice item | component/form/radio.md |
| radio-group | Single-item selector, internally composed of multiple radios | component/form/radio-group.md |
| checkbox | Multiple-choice item | component/form/checkbox.md |
| checkbox-group | Multi-item selector, internally composed of multiple checkboxes | component/form/checkbox-group.md |
| switch | Switch selector | component/form/switch.md |
| slider | Sliding selector | component/form/slider.md |

## Media components (media)

| Component Name | Component Brief Description | Component Detail Path |
|:--|:--|:--|
| image | Image, supports formats such as JPG, PNG, SVG, GIF | component/media/image.md |
| audio | Audio | component/media/audio.md |
| video | Video (same-layer rendering is not supported yet). Related api: ma.createVideoContext | component/media/video.md |
| camera | System camera, QR code scanning function. Related api: ma.createCameraContext | component/media/camera.md |

## Map (map)

| Component Name | Component Brief Description | Component Detail Path |
|:--|:--|:--|
| map | Map component, provides functions such as map display and interaction. Related api: ma.createMapContext | component/map/map.md |

## Navigation (navigating)

| Component Name | Component Brief Description | Component Detail Path |
|:--|:--|:--|
| navigator | Page link | component/navigating/navigator.md |

## Open capabilities (openCapability)

| Component Name | Component Brief Description | Component Detail Path |
|:--|:--|:--|
| web-view | A container that hosts web pages, which will automatically fill the entire mini program page | component/openCapability/web-view.md |

## Page configuration (pageConfig)

| Component Name | Component Brief Description | Component Detail Path |
|:--|:--|:--|
| page-meta | Page property configuration node, used to specify some properties of the page and listen to page events | component/pageConfig/page-meta.md |

---

*This file is compiled based on the component documents under the `component/` directory, totaling 32 components.*
