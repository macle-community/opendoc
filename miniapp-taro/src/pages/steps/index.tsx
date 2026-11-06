import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiSteps, MauiButton } from '@tarojs/plugin-platform-macle/dist/components-react';

export default function StepsPage() {
  const [active, setActive] = useState(1);
  const steps = [
    { text: 'Step 1', desc: 'Description 1' },
    { text: 'Step 2', desc: 'Description 2' },
    { text: 'Step 3', desc: 'Description 3' }
  ];

  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Steps (Active: {active + 1})</Text>
        <MauiSteps steps={steps} active={active} />
        <View style={{ marginTop: '12px' }}>
          <MauiButton size="small" type="primary" onClick={() => setActive((active + 1) % 3)}>Next Step</MauiButton>
        </View>
      </View>
    </View>
  );
}
