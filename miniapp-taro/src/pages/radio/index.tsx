import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiRadio, MauiRadioGroup } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function RadioPage() {
  const [currentRadio, setCurrentRadio] = useState('1');

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Radio Group (Selected: {currentRadio})</Text>
        <MauiRadioGroup
          value={currentRadio}
          onChange={(e: any) => {
            const val = typeof e.detail === 'string' ? e.detail : (e.detail?.value || e.target?.value || '1');
            setCurrentRadio(val);
          }}
        >
          <View style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <MauiRadio name="1" value={currentRadio} onChange={() => setCurrentRadio('1')}>Option 1</MauiRadio>
            <MauiRadio name="2" value={currentRadio} onChange={() => setCurrentRadio('2')}>Option 2</MauiRadio>
            <MauiRadio name="3" value={currentRadio} onChange={() => setCurrentRadio('3')} disabled>Option 3 (Disabled)</MauiRadio>
          </View>
        </MauiRadioGroup>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Horizontal Direction</Text>
        <MauiRadioGroup
          direction="horizontal"
          value={currentRadio}
          onChange={(e: any) => {
            const val = typeof e.detail === 'string' ? e.detail : (e.detail?.value || e.target?.value || '1');
            setCurrentRadio(val);
          }}
        >
          <View style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
            <MauiRadio name="1" value={currentRadio} onChange={() => setCurrentRadio('1')}>One</MauiRadio>
            <MauiRadio name="2" value={currentRadio} onChange={() => setCurrentRadio('2')}>Two</MauiRadio>
          </View>
        </MauiRadioGroup>
      </View>
    </View>
  );
}
