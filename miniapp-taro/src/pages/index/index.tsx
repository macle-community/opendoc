import React from 'react';
import { View, Text, Navigator } from '@tarojs/components';
import './index.css';

export default function IndexPage() {
  return (
    <View className="home-container">
      <View className="home-banner">
        <Text className="banner-title">Macle OpenDoc</Text>
        <Text className="banner-sub">MiniProgram Interactive Component Library</Text>
      </View>

      <View className="demo-block">
        <Text className="demo-title">MAUI Basic Components</Text>
        <View className="nav-grid">
          <Navigator url="/pages/button/index" className="nav-item">Button 按钮</Navigator>
          <Navigator url="/pages/layout/index" className="nav-item">Layout 栅格</Navigator>
          <Navigator url="/pages/cell/index" className="nav-item">Cell 单元格</Navigator>
          <Navigator url="/pages/tag/index" className="nav-item">Tag 标签</Navigator>
          <Navigator url="/pages/loading/index" className="nav-item">Loading 加载</Navigator>
          <Navigator url="/pages/progress/index" className="nav-item">Progress 进度条</Navigator>
          <Navigator url="/pages/divider/index" className="nav-item">Divider 分割线</Navigator>
          <Navigator url="/pages/empty/index" className="nav-item">Empty 空状态</Navigator>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">MAUI Form Components</Text>
        <View className="nav-grid">
          <Navigator url="/pages/checkbox/index" className="nav-item">Checkbox 复选框</Navigator>
          <Navigator url="/pages/radio/index" className="nav-item">Radio 单选框</Navigator>
          <Navigator url="/pages/switch/index" className="nav-item">Switch 开关</Navigator>
          <Navigator url="/pages/slider/index" className="nav-item">Slider 滑块</Navigator>
          <Navigator url="/pages/stepper/index" className="nav-item">Stepper 步进器</Navigator>
          <Navigator url="/pages/field/index" className="nav-item">Field 输入框</Navigator>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">MAUI Feedback & Nav</Text>
        <View className="nav-grid">
          <Navigator url="/pages/dialog/index" className="nav-item">Dialog 弹出框</Navigator>
          <Navigator url="/pages/toast/index" className="nav-item">Toast 轻提示</Navigator>
          <Navigator url="/pages/steps/index" className="nav-item">Steps 步骤条</Navigator>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">Standard DSL Components</Text>
        <View className="nav-grid">
          <Navigator url="/pages/view/index" className="nav-item">View 视图</Navigator>
          <Navigator url="/pages/text/index" className="nav-item">Text 文本</Navigator>
          <Navigator url="/pages/swiper/index" className="nav-item">Swiper 轮播</Navigator>
          <Navigator url="/pages/scroll-view/index" className="nav-item">ScrollView 滚动</Navigator>
        </View>
      </View>
    </View>
  );
}
