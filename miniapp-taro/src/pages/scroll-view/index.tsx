import React from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import './index.css';

export default function ScrollViewPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Horizontal Scroll View</Text>
        <ScrollView scrollX style={{ whiteSpace: 'nowrap', width: '100%' }}>
          <View className="scroll-item bg-1">Item 1</View>
          <View className="scroll-item bg-2">Item 2</View>
          <View className="scroll-item bg-3">Item 3</View>
          <View className="scroll-item bg-4">Item 4</View>
          <View className="scroll-item bg-5">Item 5</View>
        </ScrollView>
      </View>
    </View>
  );
}
