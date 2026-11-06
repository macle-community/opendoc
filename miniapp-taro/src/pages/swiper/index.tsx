import React from 'react';
import { View, Text, Swiper, SwiperItem } from '@tarojs/components';

export default function SwiperPage() {
  return (
    <View style={{ padding: '8px 0' }}>
      <View className="demo-block">
        <Text className="demo-title">1. Taro Swiper</Text>
        <Swiper indicatorDots autoplay circular style={{ height: '140px', borderRadius: '8px', overflow: 'hidden' }}>
          <SwiperItem style={{ background: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#fff', fontSize: '18px', fontWeight: 700 }}>Slide 1</Text>
          </SwiperItem>
          <SwiperItem style={{ background: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#fff', fontSize: '18px', fontWeight: 700 }}>Slide 2</Text>
          </SwiperItem>
          <SwiperItem style={{ background: '#0369a1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#fff', fontSize: '18px', fontWeight: 700 }}>Slide 3</Text>
          </SwiperItem>
        </Swiper>
      </View>
    </View>
  );
}
