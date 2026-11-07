import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import {
  MauiButton,
  MauiCell,
  MauiCellGroup,
  MauiCheckbox,
  MauiCheckboxGroup,
  MauiCol,
  MauiRow,
  MauiDialog,
  MauiDivider,
  MauiEmpty,
  MauiField,
  MauiIcon,
  MauiImage,
  MauiLoading,
  MauiOverlay,
  MauiPopup,
  MauiProgress,
  MauiRadio,
  MauiRadioGroup,
  MauiSidebar,
  MauiSidebarItem,
  MauiSlider,
  MauiStepper,
  MauiSteps,
  MauiSticky,
  MauiSwitch,
  MauiTab,
  MauiTabs,
  MauiTag,
  MauiTitleBar,
  MauiToast,
  MauiModal,
  MauiList,
  MauiListItem
} from '@macle-community/taro-plugin-macle/components-react';
import './index.css';

export default function MauiButtonPage() {
  
  const showPrompt = () => console.log('Prompt dialog');
  const showConfirm = () => console.log('Confirm dialog');
  const showTextToast = () => console.log('Text toast');
  const showLoadingToast = () => console.log('Loading toast');

  return (
    <View className="page-body">
      
      <View className="demo-block">
        <Text className="demo-title">1. Button type</Text>
        <View className="btn-wrap">
  <MauiButton type="default">default button</MauiButton>
  <MauiButton type="primary">primary button</MauiButton>
  <MauiButton type="info">information button</MauiButton>
  <MauiButton type="warning">warning button</MauiButton>
  <MauiButton type="danger">danger button</MauiButton>
</View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Plain button & Hairline border</Text>
        <View className="btn-wrap">
  <MauiButton plain type="primary">plain primary</MauiButton>
  <MauiButton plain hairline type="info">hairline info</MauiButton>
  <MauiButton plain hairline type="danger">hairline danger</MauiButton>
</View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">3. Disabled & Loading state</Text>
        <View className="btn-wrap">
  <MauiButton disabled type="primary">disabled</MauiButton>
  <MauiButton loading type="primary" />
  <MauiButton loading type="info" loadingText="Loading..." />
</View>
      </View>

      <View className="demo-block">
        <Text className="demo-title">4. Button shape & size & custom color</Text>
        <View className="btn-wrap">
  <MauiButton round type="info">round button</MauiButton>
  <MauiButton square type="primary">square button</MauiButton>
  <MauiButton type="primary" size="small">small</MauiButton>
  <MauiButton color="#7232dd">single-color</MauiButton>
  <MauiButton block type="primary" style={{ marginTop: '10px' }}>block-level button</MauiButton>
</View>
      </View>
    </View>
  );
}
