import React from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.css';

export default function ScrollViewPage() {
  const onScrollToUpper = () => { Taro.showToast({ title: 'Top Reached', icon: 'none' }); };
  const onScrollToLower = () => { Taro.showToast({ title: 'Bottom Reached', icon: 'none' }); };

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Vertical Scroll View</Text>
        <ScrollView scrollY style={{ height: '160px' }} onScrollToUpper={onScrollToUpper} onScrollToLower={onScrollToLower}>
          <View className="scroll-v-item bg-red">Scroll Item 1 (Top)</View>
          <View className="scroll-v-item bg-orange">Scroll Item 2</View>
          <View className="scroll-v-item bg-green">Scroll Item 3</View>
          <View className="scroll-v-item bg-blue">Scroll Item 4 (Bottom)</View>
        </ScrollView>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Horizontal Scroll View</Text>
        <ScrollView scrollX style={{ whiteSpace: 'nowrap', width: '100%' }}>
          <View className="scroll-h-item bg-blue">Card 1</View>
          <View className="scroll-h-item bg-green">Card 2</View>
          <View className="scroll-h-item bg-orange">Card 3</View>
          <View className="scroll-h-item bg-purple">Card 4</View>
          <View className="scroll-h-item bg-pink">Card 5</View>
        </ScrollView>
      </View>
    </View>
  );
}