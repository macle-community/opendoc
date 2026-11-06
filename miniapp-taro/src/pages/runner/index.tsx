import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import { MauiButton } from "@macle-community/taro-plugin-macle/dist/components-react";

export default function Demo() {
  const [clicks, setClicks] = useState(0);
  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Dynamic @macle-community Test</Text>
      <MauiButton type="primary" onClick={() => setClicks(c => c + 1)}>Clicked {clicks} times</MauiButton>
    </View>
  );
}
