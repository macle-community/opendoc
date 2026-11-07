import React from 'react';
import { View, Text, PickerView, PickerViewColumn } from '@tarojs/components';
import './index.css';

export default function PickerViewColumnPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Picker View Column Layout</Text>
        <PickerView indicatorStyle="height: 40px;" style={{ height: '120px', background: '#fff' }}>
          <PickerViewColumn>
            <View style={{ lineHeight: '40px', textAlign: 'center' }}>Option 1</View>
            <View style={{ lineHeight: '40px', textAlign: 'center' }}>Option 2</View>
            <View style={{ lineHeight: '40px', textAlign: 'center' }}>Option 3</View>
          </PickerViewColumn>
        </PickerView>
      </View>
    </View>
  );
}