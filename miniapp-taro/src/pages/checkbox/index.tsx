import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiCheckbox, MauiCheckboxGroup } from '@tarojs/plugin-platform-macle/dist/components-react';

export default function CheckboxPage() {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);

  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage</Text>
        <MauiCheckbox value={checked1} onChange={() => setChecked1(!checked1)}>
          Checkbox: {checked1 ? 'Checked' : 'Unchecked'}
        </MauiCheckbox>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Custom Shape & Color</Text>
        <MauiCheckbox value={checked2} shape="square" checked-color="#07c160" onChange={() => setChecked2(!checked2)}>
          Square Custom Color
        </MauiCheckbox>
      </View>
    </View>
  );
}
