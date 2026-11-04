# ma.playAudio

Plays an audio file.

## Minimum Version

23.12.0

## Parameter Description

| Parameter Name | Type     | Required | Description          |
|----------|----------|-----|----------|
| url      | string   | Yes   | Online audio URL |
| success  | Function | No   | Success callback     |
| fail     | Function | No   | Failure callback     |
| complete | Function | No   | Completion callback     |

## Usage Example

```javascript
ma.playAudio({
  url: 'https://example/test/audio',
  success(res) {
    console.log('Playback succeeded');
  },
  fail(err) {
    console.log('Playback failed:', err);
  },
  complete(res) {
    console.log('Completed:', res);
  }
});
```

## Usage Restrictions

- Minimum supported version: 23.12.0
- url is a required parameter and must be a valid URL (online audio URL)