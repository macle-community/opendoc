import React from 'react';
import { View, Text, WebView } from '@tarojs/components';
import './index.css';

export default function WebViewPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Full-Screen Web Browser View</Text>
        <WebView src="https://example.com" />
      </View>
    </View>
  );
}