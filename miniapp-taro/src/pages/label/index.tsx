import React from 'react';
import { View, Text, Label, Checkbox, Radio } from '@tarojs/components';
import './index.css';

export default function LabelPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Label with for Attribute Binding</Text>
        <View className="label-demo">
          <Checkbox id="agree-cb" color="#2563eb" />
          <Label for="agree-cb" className="bound-label">Tap this label text to toggle checkbox</Label>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Label Encapsulating Controls</Text>
        <Label className="enclosing-label">
          <Radio value="r1" checked color="#10b981" />
          <Text style={{ marginLeft: '8px', fontSize: '14px' }}>Enclosed Radio inside Label</Text>
        </Label>
      </View>
    </View>
  );
}