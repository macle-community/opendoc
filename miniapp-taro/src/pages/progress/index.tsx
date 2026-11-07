import React, { useState } from 'react';
import { View, Text, Progress, Button } from '@tarojs/components';
import './index.css';

export default function ProgressPage() {
  const [percent, setPercent] = useState(40);
  const increase = () => setPercent(p => (p >= 100 ? 20 : p + 20));

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Basic Progress Bar with Percentage</Text>
        <View className="progress-col">
          <Progress percent={30} showInfo strokeWidth={4} />
          <Progress percent={65} showInfo strokeWidth={6} activeColor="#3b82f6" />
          <Progress percent={90} showInfo strokeWidth={8} activeColor="#10b981" />
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Animated & Custom Stroke/Color Progress</Text>
        <View className="progress-col">
          <Progress percent={percent} showInfo active activeMode="forwards" strokeWidth={8} borderRadius={4} activeColor="#8b5cf6" />
          <Button size="mini" type="default" onClick={increase} style={{ alignSelf: 'flex-start', marginTop: '8px' }}>+20% Progress</Button>
        </View>
      </View>
    </View>
  );
}