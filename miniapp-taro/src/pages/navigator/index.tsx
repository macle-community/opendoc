import React from 'react';
import { View, Text, Navigator } from '@tarojs/components';
import './index.css';

export default function NavigatorPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Page Navigation (open-type="navigate")</Text>
        <View className="nav-container">
          <Navigator url="/pages/button/index" openType="navigate" hoverClass="nav-hover" className="nav-btn">
            👉 Navigate to Button Component Page
          </Navigator>
          <Navigator url="/pages/input/index" openType="navigate" hoverClass="nav-hover" className="nav-btn">
            👉 Navigate to Input Component Page
          </Navigator>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Page Redirect (open-type="redirect")</Text>
        <Navigator url="/pages/view/index" openType="redirect" className="nav-btn">
          🔄 Redirect to View Page (Close Current)
        </Navigator>
      </View>
    </View>
  );
}