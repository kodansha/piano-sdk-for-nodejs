# Piano (The digital business platform) SDK for Node.js

## Overview

This is an unofficial SDK for [Piano API](https://docs.piano.io/api/). So please do not contact Piano support with questions or concerns about this SDK. For any issues, please make an issue on GitHub.

Note: This package is incomplete and experimental. It supports only a few APIs for the moment. Please use it with the utmost care and attention.

## Installation

```shell
npm install piano-sdk
```

## Sending a Request

You must have API Token (`apiToken`) and Application ID (`aid`) to send a requests.

Provide the base URL of an API environment from the followings (See ["Environments" section on this page](https://docs.piano.io/api/) for details):

- `https://api.piano.io/api/v3`
- `https://api-au.piano.io/api/v3` - Australia
- `https://api-ap.piano.io/api/v3` - Asia-Pacific
- `https://api-eu.piano.io/api/v3` - Europe
- `https://sandbox.piano.io/api/v3` - Sandbox

The following example demonstrates fetching a user data which has uid: `abcdefg`:

```typescript
import Piano from "piano-sdk"

// Initialize SDK with your API Token and Application Id
const piano = new Piano({
  aid: 'xxxxxxxxxx', // Your Application ID
  apiToken: '', // Your API Token
  baseUrl: 'https://api.piano.io/api/v3', // API base url
});

(async () => {
  try {
    const result = await piano.publisher.user.get({ uid: "abcdefg" });
    console.log(result);
  } catch (e) {
    console.log(e);
  }
})();
```

Or if you want to update that user:

```typescript
(async () => {
  try {
    const result = await piano.publisher.user.update({
      uid: "abcdefg",
      email: "foobar@example.com",
      first_name: "Foo"
    });
  } catch (e) {
    console.log(e);
  }
})();
```
