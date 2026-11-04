# ma.navigateToMiniProgram

Navigates from one mini program to another mini program.

## Minimum Version

23.12.0

## Parameter Description

| Parameter Name | Type | Default Value | Required | Description |
|--------|------|--------|------|------|
| appId | String | - | Yes | The appId of the mini program to open |
| path | String | - | No | The page path to open; if empty, opens the home page |
| params | String | - | No | Parameters carried when navigating to another mini program, passed in the form paramA=xxx&paramB=xxx (only supported for H5 mini programs, minimum version 25.12.0) |
| capsuleShow | Boolean | true | No | Whether to show the mini program capsule button |
| success | Function | - | No | Callback function for successful API call |
| fail | Function | - | No | Callback function for failed API call |
| complete | Function | - | No | Callback function for API call completion (executed on both success and failure) |

### fail Callback Parameters

| Property | Type | Description |
|------|------|------|
| errMsg | String | Error message |
| errno | String | Error code |

## Usage Example

```javascript
ma.navigateToMiniProgram({
  appId: 'targetAppId',
  capsuleShow: false,
  path: 'page/index/index',
  params: 'key=value',
  success: (res) => {
    console.log('Navigation succeeded');
  },
  fail: (res) => {
    console.log('Navigation failed:', res);
  }
});
```

## Usage Restrictions

- Minimum supported version: 23.12.0
- appId is a required parameter
- If params is passed, path must also be passed
- Using this interface requires integration with the mini program SaaS platform
- params is only supported for H5 mini programs, not for DSL mini programs

## Tips

1. Please note that since this API needs to call server-side interfaces to query and download mini programs, you should block user operations during the API call to avoid unknown issues
2. In the scenario of navigating to another mini program via navigateToMiniProgram from within a mini program, the latest version of the mini program is queried by default, so there is no upgrade experience scenario
