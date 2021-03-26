# Piano SDK for Node.js

## Overview

This is an unofficial SDK for [Piano API](https://docs.piano.io/api/). So please do not contact Piano support with questions or concerns about this SDK. For any issues, please make an issue on GitHub.

Note: This project is still imcomplete and experimental. Please do not use it on production.

## Installation

Install from your local path as this package has not been listed on NPM yet.

```shell
npm install </path/to/this-package/>
```

## Sending a Request

You must have API Token (`api_token`) and Application ID (`aid`) to send a requests.

Also, you must pick an API environment from the followings (See ["Environments" section on this page](https://docs.piano.io/api/) for details):

- `us`
- `au` - Australia
- `ap` - Asia-Pacific
- `sandbox` - Sandbox

The following example demonstrates fetching a user data which has uid: `abcdefg`:

```typescript
import Piano from "piano-sdk"

// Initialize SDK with your API Token and Application Id
const piano = new Piano(
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", // Your API Token
  "xxxxxxxxxx", // Your Application ID
  "us" // API environment
);

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
