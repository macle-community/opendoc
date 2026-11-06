import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiButton, MauiDialog } from '@tarojs/plugin-platform-macle/dist/components-react';
import Taro from '@tarojs/taro';

export default function DialogPage() {
  const [show, setShow] = useState(false);

  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Alert Dialog</Text>
        <MauiButton type="primary" onClick={() => setShow(true)}>Open Dialog</MauiButton>
        <MauiDialog
          show={show}
          title="Taro Dialog"
          message="This dialog is rendered with Taro React!"
          show-cancel-button
          onConfirm={() => {
            setShow(false);
            Taro.showToast({ title: 'Confirmed!', icon: 'success' });
          }}
          onClose={() => setShow(false)}
        />
      </View>
    </View>
  );
}
