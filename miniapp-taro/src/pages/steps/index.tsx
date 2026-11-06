import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiSteps, MauiButton } from '@macle-community/taro-plugin-macle/dist/components-react';
import './index.css';

export default function StepsPage() {
  const [active, setActive] = useState(1);
  const steps = [
    { text: 'Step 1', desc: 'Description 1' },
    { text: 'Step 2', desc: 'Description 2' },
    { text: 'Step 3', desc: 'Description 3' }
  ];

  const nextStep = () => {
    setActive((active + 1) % 3);
  };

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Horizontal Steps (Active: {active})</Text>
        <MauiSteps steps={steps} active={active} />
        <View style={{ marginTop: '14px' }}>
          <MauiButton type="primary" size="small" onClick={nextStep}>Next Step</MauiButton>
        </View>
      </View>
    </View>
  );
}
