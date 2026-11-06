import React from 'react';
import { View, Text } from '@tarojs/components';
import { MauiRow, MauiCol } from '@macle-community/taro-plugin-macle/dist/components-react';
import './index.css';

export default function LayoutPage() {
  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage (span: 8, 8, 8)</Text>
        <MauiRow>
          <MauiCol span="8">span: 8</MauiCol>
          <MauiCol span="8">span: 8</MauiCol>
          <MauiCol span="8">span: 8</MauiCol>
        </MauiRow>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Column Offset (span: 4 + offset: 4, span: 10)</Text>
        <MauiRow>
          <MauiCol span="4">span: 4</MauiCol>
          <MauiCol span="10" offset="4">offset: 4, span: 10</MauiCol>
        </MauiRow>
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Column Offset (offset: 12, span: 12)</Text>
        <MauiRow>
          <MauiCol offset="12" span="12">offset: 12, span: 12</MauiCol>
        </MauiRow>
      </View>

      <View className="demo-block">
        <Text className="demo-title">4. Column Gutter (gutter: 20)</Text>
        <MauiRow gutter="20">
          <MauiCol span="8">span: 8</MauiCol>
          <MauiCol span="8">span: 8</MauiCol>
          <MauiCol span="8">span: 8</MauiCol>
        </MauiRow>
      </View>

      <View className="demo-block">
        <Text className="demo-title">5. Flex Layout (justify: center / end)</Text>
        <MauiRow type="flex" justify="center">
          <MauiCol span="6">span: 6</MauiCol>
          <MauiCol span="6">span: 6</MauiCol>
        </MauiRow>
        <View style={{ height: '10px' }} />
        <MauiRow type="flex" justify="end">
          <MauiCol span="6">span: 6</MauiCol>
          <MauiCol span="6">span: 6</MauiCol>
        </MauiRow>
      </View>
    </View>
  );
}
