import React, { useState } from 'react';
import { View, Text, Label, Checkbox, CheckboxGroup } from '@tarojs/components';
import './index.css';

export default function CheckboxGroupPage() {
  const [selectedList, setSelectedList] = useState('JS, TS');
  const options = [
    { value: 'JS', label: 'JavaScript', checked: true },
    { value: 'TS', label: 'TypeScript', checked: true },
    { value: 'REACT', label: 'React / Taro', checked: false },
    { value: 'MAML', label: 'Native MAML', checked: false }
  ];

  const onChange = (e: any) => {
    setSelectedList(e.detail.value.join(', '));
  };

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Multi-Select Checkbox Group with Change Handler</Text>
        <CheckboxGroup onChange={onChange}>
          <View className="cb-list">
            {options.map(item => (
              <Label key={item.value} className="cb-item">
                <Checkbox value={item.value} checked={item.checked} color="#0284c7" />
                <Text>{item.label}</Text>
              </Label>
            ))}
          </View>
        </CheckboxGroup>
        <View className="selected-text">Selected: {selectedList}</View>
      </View>
    </View>
  );
}