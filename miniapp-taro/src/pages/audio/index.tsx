import React from 'react';
import { View, Text, Audio } from '@tarojs/components';
import './index.css';

export default function AudioPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Audio Player with Playback Controls</Text>
        <View className="audio-container">
          <Audio id="myAudio" name="Sample Audio Track" author="Macle OpenDoc" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" controls style={{ width: '100%' }} />
        </View>
      </View>
    </View>
  );
}