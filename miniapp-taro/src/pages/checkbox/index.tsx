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
          <MauiCheckbox disabled value={true}>Disabled Checked</MauiCheckbox>
          <MauiCheckbox
            shape="square"
            value={checkedSquare}
            onChange={(e: any) => {
              const nextVal = typeof e.detail === 'boolean' ? e.detail : !checkedSquare;
              setCheckedSquare(nextVal);
            }}
          >
            Square Checkbox
          </MauiCheckbox>
          <MauiCheckbox checked-color="#07c160" value={true}>Custom Color</MauiCheckbox>
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
          <View style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <MauiCheckbox name="a" value={groupVal.includes('a')} onChange={() => toggleGroup('a')}>Option A</MauiCheckbox>
            <MauiCheckbox name="b" value={groupVal.includes('b')} onChange={() => toggleGroup('b')}>Option B</MauiCheckbox>
            <MauiCheckbox name="c" value={groupVal.includes('c')} onChange={() => toggleGroup('c')}>Option C</MauiCheckbox>
          </View>
        </MauiCheckboxGroup>
      </View>
    </View>
  );
}
