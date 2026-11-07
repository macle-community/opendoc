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

export default function MauiFieldPage() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('123');

  const showPrompt = () => console.log('Prompt dialog');
  const showConfirm = () => console.log('Confirm dialog');
  const showTextToast = () => console.log('Text toast');
  const showLoadingToast = () => console.log('Loading toast');

  return (
    <View className="page-body">
      
      <View className="demo-block">
        <Text className="demo-title">1. Basic Usage & Custom Types</Text>
        <MauiCellGroup>
  <MauiField value={username} label="Username" placeholder="Enter username" />
  <MauiField value={password} type="password" label="Password" placeholder="Enter password" />
  <MauiField value="Readonly value" readonly label="Status" />
  <MauiField value="" disabled label="Disabled" placeholder="Disabled input" />
</MauiCellGroup>
      </View>

      <View className="demo-block">
        <Text className="demo-title">2. Error Message & Content Alignment</Text>
        <MauiCellGroup>
  <MauiField value={phone} label="Phone" placeholder="Enter phone" errorMessage="Phone format incorrect" />
  <MauiField value="Right Aligned" label="Text" inputAlign="right" />
</MauiCellGroup>
      </View>
    </View>
  );
}
