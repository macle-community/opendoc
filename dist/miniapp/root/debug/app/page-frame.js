var __mainPageFrameReady__=window.__mainPageFrameReady__||function(){};
var __pageFrameStartTime__=__pageFrameStartTime__||Date.now(); 
var __webviewId__=__webviewId__;
var __layer__='view';
var __maAppCode__=__maAppCode__||{}; 
var __MAML_GLOBAL__=__MAML_GLOBAL__||{entrys:{},defines:{},modules:{},sjs_init:false};


var BASE_DEVICE_WIDTH = 750;
var DEFAULT_DEVICE_WIDTH = 375;
var DEFAULT_DEVICE_DPR = 2;
var EPSILON = 1e-4;
var deviceWidth = window.screen.width || DEFAULT_DEVICE_WIDTH;

var isIOS = /iPhone/.test(navigator.userAgent);

var deviceDPR = window.devicePixelRatio || DEFAULT_DEVICE_DPR;

var checkDeviceWidth = function() {
  var newDeviceDPR = window.devicePixelRatio || DEFAULT_DEVICE_DPR;
  var newDeviceWidth = window.screen.width || DEFAULT_DEVICE_WIDTH;
  var isLandscape = window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '');

  if (isLandscape) {
    deviceWidth = newDeviceWidth;
  }

  if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
    deviceWidth = newDeviceWidth;
    deviceDPR = newDeviceDPR;
  }
};

checkDeviceWidth();

var transformRPX = function(number, newDeviceWidth) {
  if (number === 0) return 0;

  number = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  number = Math.floor(number + EPSILON);

  if (number === 0) {
    return (deviceDPR === 1 || !isIOS) ? 1 : 0.5;
  }

  return number;
};

var setCssToHead=function(file,info){
  var importedStyles={},info=info||{};
  function makeup(file,opt){
    var isPath=typeof(file)==="string";
    if(isPath&&importedStyles.hasOwnProperty(file))return "";
    if(isPath)importedStyles[file]=1;
    var contents=isPath?__COMMON_STYLESHEETS__[file]:file,res="";
    for(var i=contents.length-1;i>=0;i--){
      var content=contents[i];
      if(typeof(content)==="object"){
        var op=content[0];
        if(op===0)res=transformRPX(content[1],opt.deviceWidth)+"px"+res; // rpx
        else if(op===1)res=opt.suffix+res; // suffix
        else if(op===2)rewritor(undefined,undefined,undefined,content[1],{"path":"./"+content[1]}); // import at the top
        else if(op===3)res=makeup(content[1],opt)+res; // import not at the top
      }else{
        res=content+res;
      }
    }
    return res;
  }
  var rewritor=function(suffix,opt,style,tFile,tInfo){
    opt=opt||{};
    suffix=suffix||"";
    opt.suffix=suffix;
    tFile=tFile||file;
    tInfo=tInfo||info;
    css=makeup(tFile,opt);
    if(!css)return;
    css+='\n/*# sourceMappingURL='+location.pathname.substring(0,location.pathname.indexOf('/app'))+'/app/'+tInfo.path+'.map */';
    if(!style){
      var head=document.head||document.getElementsByTagName('head')[0];
      style=document.createElement('style');
      style.type='text/css';
      style.setAttribute("mass:path",tInfo.path);
      head.appendChild(style);
    }
    if(style.childNodes.length==0)style.appendChild(document.createTextNode(css));
    else style.childNodes[0].nodeValue=css;
  }
  return rewritor;
}
__maAppCode__['app.json']={"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"Macle MiniProgram Showcase","navigationBarTextStyle":"black","capsuleTheme":"light"}};



__mainPageFrameReady__();
var __pageFrameEndTime__=Date.now();
