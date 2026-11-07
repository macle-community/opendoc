import React from 'react';
import { View, Text, Radio } from '@tarojs/components';
import './index.css';

export default function RadioPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Single Radio Button</Text>
        <View className="radio-row">
          <Radio value="single" checked color="#2563eb" />
          <Text style={{ marginLeft: '8px', fontSize: '14px' }}>Standalone Checked Radio</Text>
        </View>
      </View>
    </View>
  );
}