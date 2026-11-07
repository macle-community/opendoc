import React from 'react';
import { View, Text, Navigator } from '@tarojs/components';
import './index.css';

export default function IndexPage() {
  return (
    <View className="home-container">
      <View className="home-banner">
        <Text className="banner-title">Macle Taro React Components</Text>
        <Text className="banner-sub">32 Core MiniProgram DSL Components & Numbered Examples</Text>
      </View>

      <View className="demo-block">
        <Text className="demo-title">View Container 视图容器 (6)</Text>
        <View className="nav-grid">
          <Navigator url="/pages/view/index" className="nav-item">view 视图</Navigator>
          <Navigator url="/pages/scroll-view/index" className="nav-item">scroll-view 滚动</Navigator>
          <Navigator url="/pages/swiper/index" className="nav-item">swiper 滑块</Navigator>
          <Navigator url="/pages/swiper-item/index" className="nav-item">swiper-item 项</Navigator>
          <Navigator url="/pages/cover-view/index" className="nav-item">cover-view 覆盖视图</Navigator>
          <Navigator url="/pages/cover-image/index" className="nav-item">cover-image 覆盖图片</Navigator>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">Basic Content 基础内容 (4)</Text>
        <View className="nav-grid">
          <Navigator url="/pages/text/index" className="nav-item">text 文本</Navigator>
          <Navigator url="/pages/icon/index" className="nav-item">icon 图标</Navigator>
          <Navigator url="/pages/rich-text/index" className="nav-item">rich-text 富文本</Navigator>
          <Navigator url="/pages/progress/index" className="nav-item">progress 进度条</Navigator>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">Form Components 表单组件 (14)</Text>
        <View className="nav-grid">
          <Navigator url="/pages/button/index" className="nav-item">button 按钮</Navigator>
          <Navigator url="/pages/checkbox/index" className="nav-item">checkbox 多选框</Navigator>
          <Navigator url="/pages/checkbox-group/index" className="nav-item">checkbox-group 组</Navigator>
          <Navigator url="/pages/form/index" className="nav-item">form 表单</Navigator>
          <Navigator url="/pages/input/index" className="nav-item">input 输入框</Navigator>
          <Navigator url="/pages/picker/index" className="nav-item">picker 选择器</Navigator>
          <Navigator url="/pages/picker-view/index" className="nav-item">picker-view 嵌入选择</Navigator>
          <Navigator url="/pages/picker-view-column/index" className="nav-item">picker-view-column</Navigator>
          <Navigator url="/pages/label/index" className="nav-item">label 标签</Navigator>
          <Navigator url="/pages/switch/index" className="nav-item">switch 开关</Navigator>
          <Navigator url="/pages/radio/index" className="nav-item">radio 单选框</Navigator>
          <Navigator url="/pages/radio-group/index" className="nav-item">radio-group 组</Navigator>
          <Navigator url="/pages/slider/index" className="nav-item">slider 滑块</Navigator>
          <Navigator url="/pages/textarea/index" className="nav-item">textarea 多行输入</Navigator>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">Navigating 页面导航 (1)</Text>
        <View className="nav-grid">
          <Navigator url="/pages/navigator/index" className="nav-item full-width">navigator 页面跳转</Navigator>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">Media Components 媒体组件 (4)</Text>
        <View className="nav-grid">
          <Navigator url="/pages/image/index" className="nav-item">image 图片</Navigator>
          <Navigator url="/pages/video/index" className="nav-item">video 视频</Navigator>
          <Navigator url="/pages/audio/index" className="nav-item">audio 音频</Navigator>
          <Navigator url="/pages/camera/index" className="nav-item">camera 相机</Navigator>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">Open Capability & Config 开放能力与配置 (2)</Text>
        <View className="nav-grid">
          <Navigator url="/pages/web-view/index" className="nav-item">web-view 网页容器</Navigator>
          <Navigator url="/pages/page-meta/index" className="nav-item">page-meta 页面配置</Navigator>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">Map 地图组件 (1)</Text>
        <View className="nav-grid">
          <Navigator url="/pages/map/index" className="nav-item full-width">map 地图</Navigator>
        </View>
      
      <View className="demo-block">
        <Text className="demo-title" style={{ borderLeftColor: '#0284c7' }}>MAUI Basic Components 基础组件 (5)</Text>
        <View className="nav-grid">
          <Navigator url="/pages/maui-button/index" className="nav-item">Button 按钮</Navigator>
          <Navigator url="/pages/maui-cell/index" className="nav-item">Cell 单元格</Navigator>
          <Navigator url="/pages/maui-icon/index" className="nav-item">Icon 图标</Navigator>
          <Navigator url="/pages/maui-image/index" className="nav-item">Image 图片</Navigator>
          <Navigator url="/pages/maui-layout/index" className="nav-item">Layout 栅格布局</Navigator>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title" style={{ borderLeftColor: '#0284c7' }}>MAUI Form Components 表单组件 (6)</Text>
        <View className="nav-grid">
          <Navigator url="/pages/maui-checkbox/index" className="nav-item">Checkbox 复选框</Navigator>
          <Navigator url="/pages/maui-field/index" className="nav-item">Field 输入框</Navigator>
          <Navigator url="/pages/maui-radio/index" className="nav-item">Radio 单选框</Navigator>
          <Navigator url="/pages/maui-slider/index" className="nav-item">Slider 滑块</Navigator>
          <Navigator url="/pages/maui-stepper/index" className="nav-item">Stepper 步进器</Navigator>
          <Navigator url="/pages/maui-switch/index" className="nav-item">Switch 开关</Navigator>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title" style={{ borderLeftColor: '#0284c7' }}>MAUI Feedback Components 反馈组件 (6)</Text>
        <View className="nav-grid">
          <Navigator url="/pages/maui-dialog/index" className="nav-item">Dialog 弹出框</Navigator>
          <Navigator url="/pages/maui-loading/index" className="nav-item">Loading 加载</Navigator>
          <Navigator url="/pages/maui-modal/index" className="nav-item">Modal 对话框</Navigator>
          <Navigator url="/pages/maui-overlay/index" className="nav-item">Overlay 遮罩层</Navigator>
          <Navigator url="/pages/maui-popup/index" className="nav-item">Popup 弹出层</Navigator>
          <Navigator url="/pages/maui-toast/index" className="nav-item">Toast 轻提示</Navigator>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title" style={{ borderLeftColor: '#0284c7' }}>MAUI Navigation Components 导航组件 (4)</Text>
        <View className="nav-grid">
          <Navigator url="/pages/maui-sidebar/index" className="nav-item">Sidebar 侧边导航</Navigator>
          <Navigator url="/pages/maui-steps/index" className="nav-item">Steps 步骤条</Navigator>
          <Navigator url="/pages/maui-tab/index" className="nav-item">Tab 标签页</Navigator>
          <Navigator url="/pages/maui-title-bar/index" className="nav-item">TitleBar 导航栏</Navigator>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title" style={{ borderLeftColor: '#0284c7' }}>MAUI Display Components 展示组件 (6)</Text>
        <View className="nav-grid">
          <Navigator url="/pages/maui-divider/index" className="nav-item">Divider 分割线</Navigator>
          <Navigator url="/pages/maui-empty/index" className="nav-item">Empty 空状态</Navigator>
          <Navigator url="/pages/maui-list/index" className="nav-item">List 列表</Navigator>
          <Navigator url="/pages/maui-progress/index" className="nav-item">Progress 进度条</Navigator>
          <Navigator url="/pages/maui-sticky/index" className="nav-item">Sticky 粘性布局</Navigator>
          <Navigator url="/pages/maui-tag/index" className="nav-item">Tag 标签</Navigator>
        </View>
      </View>
      </View>
    </View>
  );
}
