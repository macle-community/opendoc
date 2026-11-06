import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiCheckbox, MauiCheckboxGroup } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function CheckboxPage() {
  const [checked, setChecked] = useState(true);
  const [checkedSquare, setCheckedSquare] = useState(true);
  const [groupVal, setGroupVal] = useState<string[]>(['a', 'b']);

  const toggleGroup = (name: string) => {
    setGroupVal(prev => prev.includes(name) ? prev.filter(x => x !== name) : [...prev, name]);
  };

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage</Text>
        <MauiCheckbox
          key="cb-basic"
          value={checked}
          onChange={(e: any) => {
            const nextVal = typeof e.detail === 'boolean' ? e.detail : !checked;
            setChecked(nextVal);
          }}
        >
          Checkbox: {checked ? 'Checked' : 'Unchecked'}
        </MauiCheckbox>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Disabled & Shapes</Text>
        <View className="demo-row">
          <MauiCheckbox key="cb-disabled" disabled value={true}>Disabled Checked</MauiCheckbox>
          <MauiCheckbox
            key="cb-square"
            shape="square"
            value={checkedSquare}
            onChange={(e: any) => {
              const nextVal = typeof e.detail === 'boolean' ? e.detail : !checkedSquare;
              setCheckedSquare(nextVal);
            }}
          >
            Square Checkbox
          </MauiCheckbox>
          <MauiCheckbox key="cb-custom" checkedColor="#07c160" value={true}>Custom Color</MauiCheckbox>
        </View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Checkbox Group</Text>
        <MauiCheckboxGroup
          value={groupVal}
          onChange={(e: any) => {
            const val = Array.isArray(e.detail) ? e.detail : (e.detail?.value || []);
            setGroupVal(val);
          }}
        >
          <MauiCheckbox key="cb-group-a" name="a" value={groupVal.includes('a')} onChange={() => toggleGroup('a')}>Option A</MauiCheckbox>
          <MauiCheckbox key="cb-group-b" name="b" value={groupVal.includes('b')} onChange={() => toggleGroup('b')}>Option B</MauiCheckbox>
          <MauiCheckbox key="cb-group-c" name="c" value={groupVal.includes('c')} onChange={() => toggleGroup('c')}>Option C</MauiCheckbox>
        </MauiCheckboxGroup>
      </View>
    </View>
  );
}
