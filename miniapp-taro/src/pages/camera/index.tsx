import React from 'react';
import { View, Text, Camera, CoverView } from '@tarojs/components';
import './index.css';

export default function CameraPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Camera Viewfinder with Device Position & Flash</Text>
        <View className="camera-wrapper">
          <Camera devicePosition="back" flash="off" style={{ width: '100%', height: '220px', borderRadius: '8px', overflow: 'hidden' }}>
            <CoverView style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(0,0,0,0.6)', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '11px' }}>
              Device: Back | Flash: Off
            </CoverView>
          </Camera>
        </View>
      </View>
    </View>
  );
}