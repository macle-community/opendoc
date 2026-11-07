import React, { useState } from 'react';
import { View, Text, Picker } from '@tarojs/components';
import './index.css';

export default function PickerPage() {
  const fruits = ['Apple', 'Banana', 'Orange', 'Strawberry'];
  const [fruitIdx, setFruitIdx] = useState(0);
  const [date, setDate] = useState('2026-11-07');

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Normal Selector (Single Column)</Text>
        <Picker mode="selector" range={fruits} value={fruitIdx} onChange={(e: any) => setFruitIdx(e.detail.value)}>
          <View className="picker-display">Selected Fruit: <Text className="highlight">{fruits[fruitIdx]}</Text></View>
        </Picker>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Time & Date Selector</Text>
        <Picker mode="date" value={date} onChange={(e: any) => setDate(e.detail.value)}>
          <View className="picker-display">Date: <Text className="highlight">{date}</Text></View>
        </Picker>
      </View>
    </View>
  );
}