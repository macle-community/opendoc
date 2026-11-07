import React, { useState } from 'react';
import { View, Text, Input } from '@tarojs/components';
import './index.css';

export default function InputPage() {
  const [val, setVal] = useState('');

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Text Input with Placeholder</Text>
        <View className="input-block">
          <Input className="std-input" placeholder="Standard text input..." onInput={e => setVal(e.detail.value)} />
          <Text className="input-val-preview">Current Input: {val}</Text>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Password, Number & Digit Input Types</Text>
        <View className="input-col">
          <Input className="std-input" password placeholder="Password input" />
          <Input className="std-input" type="number" placeholder="Number keyboard input" />
          <Input className="std-input" type="digit" placeholder="Decimal digit keyboard input" />
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Focus, Maxlength & Confirm Type</Text>
        <Input className="std-input" maxLength={10} confirmType="done" placeholder="Maxlength 10 chars" />
      </View>
    </View>
  );
}