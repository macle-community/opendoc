import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiSlider } from '@tarojs/plugin-platform-macle/dist/components-react';

export default function SliderPage() {
  const [val, setVal] = useState(50);

  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Basic Slider (Value: {val})</Text>
        <MauiSlider value={val} onChange={(e: any) => setVal(e.detail || 50)} />
      </View>
    </View>
  );
}
