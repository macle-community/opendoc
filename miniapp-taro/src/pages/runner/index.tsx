import React from 'react';
import { View, Text } from '@tarojs/components';
import './index.css';

export default function RunnerPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">Dynamic Taro React Runner</Text>
        <Text style={{ fontSize: '13px', color: '#64748b' }}>Live Execution Sandbox</Text>
      </View>
    </View>
  );
}
