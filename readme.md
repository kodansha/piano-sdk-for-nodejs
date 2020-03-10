# Piano SDK for Node.js

## Overview

This is an unofficial SDK for [Piano API](https://docs.piano.io/api/). So please do not contact Piano support with questions or concerns about this SDK. For any issues, please make an issue on GitHub

## Installation

WIP. This package has not been listed on NPM yet.

## Sending a Request

You must have API Token (`api_token`) and Application ID (`aid`) to send a requests.

The following example demonstrates fetching a user data which has uid: `abcdefg`:

```typescript
import Piano from "/path/to/this-package/index"

// Initialize SDK with your API Token and Application Id
const piano = new Piano(
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", // Your API Token
  "xxxxxxxxxx", // Your Application ID
  true // Set it true if you use Sandbox environment. Omit this if not.
);

(async () => {
  try {
    const result = await piano.publisher.user.update({ uid: "abcdefg" });
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
