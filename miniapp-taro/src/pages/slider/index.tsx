import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiSlider } from '@macle-community/taro-plugin-macle/dist/components-react';
import './index.css';

export default function SliderPage() {
  const [value, setValue] = useState(50);

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage (Value: {value})</Text>
        <MauiSlider value={value} onChange={(e: any) => setValue(e.detail)} />
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Custom Range (-50 to 50)</Text>
        <MauiSlider min={-50} max={50} value={0} />
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Step Size (step: 10)</Text>
        <MauiSlider step={10} value={30} />
      </View>
    </View>
  );
}
