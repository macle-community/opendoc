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

export default function MauiCellPage() {
  
  const showPrompt = () => console.log('Prompt dialog');
  const showConfirm = () => console.log('Confirm dialog');
  const showTextToast = () => console.log('Text toast');
  const showLoadingToast = () => console.log('Loading toast');

  return (
    <View className="page-body">
      
      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage & Description</Text>
        <MauiCellGroup>
  <MauiCell title="Cell title" value="Content" />
  <MauiCell title="Cell title" value="Content" label="Description" />
</MauiCellGroup>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Cell Size & Navigation Links</Text>
        <MauiCellGroup>
  <MauiCell title="Large Cell" value="Content" size="large" label="Description" />
  <MauiCell title="Navigation Link" isLink />
  <MauiCell title="Value Link" isLink value="Detail" />
</MauiCellGroup>
      </View>
    </View>
  );
}
