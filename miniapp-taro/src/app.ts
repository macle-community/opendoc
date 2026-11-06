import { PropsWithChildren } from 'react';
import { useLaunch } from '@tarojs/taro';
import './app.css';

function App({ children }: PropsWithChildren) {
  useLaunch(() => {
    console.log('[Macle Taro Miniapp] App launched successfully!');
  });
  return children;
}

export default App;
