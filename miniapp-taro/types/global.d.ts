/// <reference types="@tarojs/taro" />
declare const ma: any;
declare namespace Taro {
  interface TaroStatic {
    tradePay?: (options: any) => Promise<any>;
    startPay?: (options: any) => Promise<any>;
  }
}
