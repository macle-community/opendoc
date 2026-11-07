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

export default function MauiRadioPage() {
  
  const [radio1, setRadio1] = useState('1');
  const [radio2, setRadio2] = useState('a');

  const showPrompt = () => console.log('Prompt dialog');
  const showConfirm = () => console.log('Confirm dialog');
  const showTextToast = () => console.log('Text toast');
  const showLoadingToast = () => console.log('Loading toast');

  return (
    <View className="page-body">
      
      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage & Horizontal Alignment</Text>
        <View className="item-col">
  <MauiRadioGroup value={radio1} onChange={setRadio1}>
    <MauiRadio name="1">Option 1</MauiRadio>
    <MauiRadio name="2">Option 2</MauiRadio>
  </MauiRadioGroup>
  <MauiRadioGroup value={radio2} direction="horizontal" style={{ marginTop: '10px' }} onChange={setRadio2}>
    <MauiRadio name="a" checkedColor="#07c160">A (Green)</MauiRadio>
    <MauiRadio name="b" shape="square">B (Square)</MauiRadio>
  </MauiRadioGroup>
</View>
      </View>
    </View>
  );
}
