import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { useRouter } from '@tarojs/taro';
import Taro from '@tarojs/taro';
import { MauiButton } from '@tarojs/plugin-platform-macle/dist/components-react';
import './index.css';

export default function RunnerPage() {
  const router = useRouter();
  const [snippetTitle] = useState(router.params.title ? decodeURIComponent(router.params.title) : 'Macle MiniProgram Live Execution');

  const handleRunClick = () => {
    Taro.showToast({ title: 'Code executed in DevSuite!', icon: 'success' });
  };

  return (
    <View className="runner-page">
      <View className="demo-block">
        <Text className="demo-title">Dynamic MAML Snippet Execution</Text>
        <View className="runner-content">
          <Text className="snippet-desc">{snippetTitle}</Text>
          <MauiButton type="primary" block onClick={handleRunClick}>Run Live Interactive Action</MauiButton>
        </View>
      </View>
    </View>
  );
}
