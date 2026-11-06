import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiStepper } from '@tarojs/plugin-platform-macle/dist/components-react';

export default function StepperPage() {
  const [val, setVal] = useState(1);

  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Basic Stepper (Value: {val})</Text>
        <MauiStepper value={val} min={1} max={10} step={1} onChange={(e: any) => setVal(e.detail || 1)} />
      </View>
    </View>
  );
}
