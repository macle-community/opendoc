import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiStepper } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function StepperPage() {
  const [count, setCount] = useState(3);

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage (Value: {count})</Text>
        <MauiStepper value={count} onChange={(e: any) => setCount(e.detail)} />
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Step Size & Limits (1 to 10, step 2)</Text>
        <MauiStepper min={1} max={10} step={2} value={count} onChange={(e: any) => setCount(e.detail)} />
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Disabled</Text>
        <MauiStepper disabled value={1} />
      </View>
    </View>
  );
}
