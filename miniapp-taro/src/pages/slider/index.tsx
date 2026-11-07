import React, { useState } from 'react';
import { View, Text, Slider } from '@tarojs/components';
import './index.css';

export default function SliderPage() {
  const [volume, setVolume] = useState(50);

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Slider with Min, Max & Show-Value</Text>
        <View className="slider-box">
          <Slider min={0} max={100} value={volume} showValue onChange={(e: any) => setVolume(e.detail.value)} activeColor="#2563eb" />
          <Text className="slider-text">Volume: {volume}%</Text>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Step Slider with Custom Colors</Text>
        <View className="slider-box">
          <Slider step={10} value={30} showValue activeColor="#10b981" blockColor="#059669" blockSize={20} />
        </View>
      </View>
    </View>
  );
}