import React from 'react';
import { View, Text, CoverView } from '@tarojs/components';
import './index.css';

export default function CoverViewPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Cover View Overlay on Native Components</Text>
        <View className="media-container" style={{ position: 'relative', height: '180px', background: '#0f172a', borderRadius: '10px', overflow: 'hidden' }}>
          <View className="simulated-media" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
            [Media Surface Area]
          </View>
          <CoverView className="cover-badge" style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(0,0,0,0.65)', color: '#fff', padding: '4px 10px', borderRadius: '16px', fontSize: '12px' }}>
            ● Live Stream Overlay
          </CoverView>
          <CoverView className="cover-actions" style={{ position: 'absolute', bottom: '12px', right: '12px', background: '#2563eb', color: '#fff', padding: '6px 14px', borderRadius: '6px', fontSize: '13px', fontWeight: '600' }}>
            Overlay Button
          </CoverView>
        </View>
      </View>
    </View>
  );
}