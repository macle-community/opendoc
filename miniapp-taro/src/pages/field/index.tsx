import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { MauiField, MauiCellGroup } from '@macle-community/taro-plugin-macle/components-react';
import './index.css';

export default function FieldPage() {
  const [username, setUsername] = useState('macle_user');

  return (
    <View className="page-body">
      <View className="demo-block" style={{ padding: 0, overflow: 'hidden' }}>
        <MauiCellGroup>
          <MauiField
            value={username}
            placeholder="Please enter username"
            label="Username"
            onChange={(e: any) => setUsername(e.detail)}
          />
          <MauiField type="password" label="Password" placeholder="Enter password" />
          <MauiField clearable label="Clearable" placeholder="Clearable input" />
          <MauiField disabled label="Disabled" value="Input disabled" />
        </MauiCellGroup>
      </View>
    </View>
  );
}
