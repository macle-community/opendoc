import React, { useState } from 'react';
import { View, Text, Label, Checkbox } from '@tarojs/components';
import './index.css';

export default function CheckboxPage() {
  const [isAgree, setIsAgree] = useState(true);

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Single Checkbox with Checked State & Color</Text>
        <View className="checkbox-demo">
          <Label className="cb-row" onClick={() => setIsAgree(!isAgree)}>
            <Checkbox value="agree" checked={isAgree} color="#2563eb" />
            <Text className="cb-label">I agree to the Terms of Service</Text>
          </Label>
        </View>
      </View>
    </View>
  );
}