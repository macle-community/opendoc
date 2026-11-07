import React, { useState } from 'react';
import { View, Text, PickerView, PickerViewColumn } from '@tarojs/components';
import './index.css';

export default function PickerViewPage() {
  const years = [2024, 2025, 2026, 2027];
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const days = [1, 5, 10, 15, 20, 25, 30];
  const [val, setVal] = useState([2, 10, 3]);

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Embedded Multi-Column Picker View</Text>
        <View className="preview-date">{years[val[0]]}年 {months[val[1]]}月 {days[val[2]]}日</View>
        <PickerView indicatorStyle="height: 50px;" style={{ width: '100%', height: '200px', background: '#fff', borderRadius: '8px' }} value={val} onChange={(e: any) => setVal(e.detail.value)}>
          <PickerViewColumn>
            {years.map(y => <View key={y} style={{ lineHeight: '50px', textAlign: 'center' }}>{y}年</View>)}
          </PickerViewColumn>
          <PickerViewColumn>
            {months.map(m => <View key={m} style={{ lineHeight: '50px', textAlign: 'center' }}>{m}月</View>)}
          </PickerViewColumn>
          <PickerViewColumn>
            {days.map(d => <View key={d} style={{ lineHeight: '50px', textAlign: 'center' }}>{d}日</View>)}
          </PickerViewColumn>
        </PickerView>
      </View>
    </View>
  );
}