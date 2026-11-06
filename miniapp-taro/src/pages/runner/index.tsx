import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { MauiButton } from '@tarojs/plugin-platform-macle/dist/components-react';
import Taro, { useRouter } from '@tarojs/taro';

export default function RunnerPage() {
  const router = useRouter();
  const title = router.params.title ? decodeURIComponent(router.params.title) : 'Taro React Live Execution';
  const [clickCount, setClickCount] = useState(0);

  const handleAction = () => {
    setClickCount(prev => prev + 1);
    Taro.showToast({
      title: `Taro React clicked ${clickCount + 1} times!`,
      icon: 'success'
    });
  };

  return (
    <View style={{ padding: '12px' }}>
      <View className="demo-block">
        <Text className="demo-title">⚛️ Dynamic Taro React Execution</Text>
        <View style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Text style={{ fontSize: '13px', color: '#64748b' }}>{title}</Text>
          <MauiButton type="primary" block onClick={handleAction}>
            Execute Taro React Action ({clickCount})
          </MauiButton>
        </View>
      </View>
    </View>
  );
}
