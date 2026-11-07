import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiProgress } from '@macle-community/taro-plugin-macle/components-react';
import './index.css';

export default function ProgressPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage (50%)</Text>
        <MauiProgress percentage={50} />
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Stroke Width & Inactive</Text>
        <MauiProgress stroke-width="8" percentage={75} />
        <View style={{ height: '12px' }} />
        <MauiProgress inactive percentage={40} />
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Custom Color</Text>
        <MauiProgress color="#ee0a24" percentage={65} />
      </View>
    </View>
  );
}
