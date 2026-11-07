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

export default function MauiLayoutPage() {
  
  const showPrompt = () => console.log('Prompt dialog');
  const showConfirm = () => console.log('Confirm dialog');
  const showTextToast = () => console.log('Text toast');
  const showLoadingToast = () => console.log('Loading toast');

  return (
    <View className="page-body">
      
      <View className="demo-block">
        <Text className="demo-title">1. Basic 24-Column Grid Layout</Text>
        <View className="grid-wrap">
  <MauiRow>
    <MauiCol span={8}><View className="col-box bg-dark">span: 8</View></MauiCol>
    <MauiCol span={8}><View className="col-box bg-light">span: 8</View></MauiCol>
    <MauiCol span={8}><View className="col-box bg-dark">span: 8</View></MauiCol>
  </MauiRow>
  <MauiRow style={{ marginTop: '10px' }}>
    <MauiCol span={4}><View className="col-box bg-dark">span: 4</View></MauiCol>
    <MauiCol span={10} offset={4}><View className="col-box bg-light">offset: 4, span: 10</View></MauiCol>
    <MauiCol span={6}><View className="col-box bg-dark">span: 6</View></MauiCol>
  </MauiRow>
</View>
      </View>
    </View>
  );
}
