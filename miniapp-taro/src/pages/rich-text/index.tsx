import React from 'react';
import { View, Text, RichText } from '@tarojs/components';
import './index.css';

export default function RichTextPage() {
  const htmlSnippet = '<div style="background:#eff6ff;padding:12px;border-radius:8px;"><h4 style="color:#1d4ed8;margin:0 0 6px 0;">Macle HTML RichText</h4><p style="color:#334155;font-size:13px;margin:0;">Render formatted HTML strings with <b>bold tags</b> and <span style="color:#ef4444;">colored highlights</span>.</p></div>';
  const nodeArray = [{
    name: 'div',
    attrs: { class: 'custom-node-box', style: 'color:#059669;font-weight:bold;font-size:14px;' },
    children: [{ type: 'text', text: '✓ Rendered via Structured Node Array' }]
  }];

  return (
    <View className="page-body">
      <View className="demo-block">
        <Text className="demo-title">1. HTML String Rendering</Text>
        <RichText nodes={htmlSnippet} space="nbsp" />
      </View>
      <View className="demo-block">
        <Text className="demo-title">2. Node Array Structure</Text>
        <RichText nodes={nodeArray as any} />
      </View>
    </View>
  );
}