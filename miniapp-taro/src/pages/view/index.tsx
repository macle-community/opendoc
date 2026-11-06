import React from 'react';
import { View, Text } from '@tarojs/components';
import './index.css';

export default function ViewPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Flex Direction: Row</Text>
        <View className="flex-row">
          <View className="box bg-red">A</View>
          <View className="box bg-green">B</View>
          <View className="box bg-blue">C</View>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Flex Direction: Column</Text>
        <View className="flex-col">
          <View className="box bg-red">Row 1</View>
          <View className="box bg-green">Row 2</View>
          <View className="box bg-blue">Row 3</View>
        </View>
      </View>
    </View>
  );
}
