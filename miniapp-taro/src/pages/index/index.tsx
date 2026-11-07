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
      </View>
    </View>
  );
}
