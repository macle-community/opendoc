## view

> View container

| Property               | Type      | Default Value | Required | Description                                       |
|:-----------------------|:--------|:------|:---|:-----------------------------------------|
| hover-class            | String  | none  | No  | Specifies the style class on press. When hover-class="none", there is no pressed state effect |
| hover-stop-propagation | Boolean | false | No  | Specifies whether to prevent the ancestor nodes of this node from showing the pressed state                      |
| hover-start-time       | Number  | 50    | No  | How long after pressing the pressed state appears, in milliseconds                          |
| hover-stay-time        | Number  | 400   | No  | How long the pressed state remains after the finger is released, in milliseconds                        |

### Sample Code

```js

Page({
    data: {
        pageName: 'component/view',
    },
});

```

```html

<view class="page">
    <view class="page-description">The view container is equivalent to the div of the web or the View of react-native</view>
    <view class="page-section">
        <view class="page-section-demo">
            <view class="stream">
                <view class="post">
                    <view class="postUser">
                        <view class="postUserName">Zoe</view>
                    </view>
                    <view class="postBody">
                        <view class="postBodyContent">
                            Welcome to the Macle mini program!
                        </view>
                        <view class="postBodyDate">
                            June 12
                        </view>
                    </view>
                </view>

                <view class="post">
                    <view class="postUser">
                        <view class="postUserName">Jim</view>
                    </view>
                    <view class="postBody">
                        <view class="postBodyContent">
                            @Zog How to get started?
                        </view>
                        <view class="postBodyDate">
                            June 13
                        </view>
                    </view>
                </view>

                <view class="post">
                    <view class="postUser">
                        <view class="postUserName">Zog</view>
                    </view>
                    <view class="postBody">
                        <view class="postBodyContent">
                            You can check out the Demo for a quick overview; download our IDE to start developing~
                        </view>
                        <view class="postBodyDate">
                            June 14
                        </view>
                    </view>
                </view>

                <view class="post">
                    <view class="postUser">
                        <view class="postUserName">Alice</view>
                    </view>
                    <!-- hover blue -->
                    <view class="postBody" hover-class="burlywood">
                        <view class="postBodyContent">
                            excellent!
                        </view>
                        <view class="postBodyDate" hidden>
                            June 15
                        </view>
                    </view>
                </view>

                <view class="post" hidden>
                    <view class="postUser">
                        <view class="postUserName">Alice</view>
                    </view>
                    <view class="postBody">
                        <view class="postBodyContent">
                            excellent + 1
                        </view>
                        <view class="postBodyDate">
                            June 15
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</view>

```

```css

.burlywood {
    background: burlywood;
}

.stream {
    display: flex;
    flex-direction: column;
    padding: 15rpx;
}

.post + .post {
    margin-top: 15rpx;
}

.post {
    display: flex;
}

.postUser {
    flex: 0 1 auto;
    padding-bottom: 20rpx;
}

.postUserName {
    width: 180rpx;
    color: #7197a5;
    font-size: 24rpx;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    margin-top: 60rpx;
}

.postBody {
    flex: 1 1 0%;
    position: relative;
    padding: 30rpx;
    border: 2rpx solid #b0b7b9;
    border-radius: 8rpx;
}

.postBody:after,
.postBody:before {
    right: 100%;
    top: 70rpx;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.postBody:after {
    border-color: transparent;
    border-right-color: #ffffff;
    border-width: 16rpx;
    margin-top: -16rpx;
}

.postBody:before {
    border-color: transparent;
    border-right-color: #deebf0;
    border-width: 18rpx;
    margin-top: -18rpx;
}

.postBodyContent {
    color: #769caa;
    font-size: 24rpx;
}

.postBodyDate {
    margin-top: 15rpx;
    color: #708188;
    font-size: 20rpx;
    text-transform: uppercase;
    letter-spacing: 2rpx;
}

.burlywood {
    color: burlywood;
}

```

### Bug & Tip

1. If you need to use a scrollable view, please use scroll-view
