import fetch from 'node-fetch';
import { URLSearchParams } from 'url';

import { Environment } from '../interfaces/client';
import { ApiResponse } from '../interfaces/api-response';

const usBaseUrl = 'https://api.piano.io/api/v3';
const auBaseUrl = 'https://api-au.piano.io/api/v3';
const apBaseUrl = 'https://api-ap.piano.io/api/v3';
const sandboxBaseUrl = 'https://sandbox.piano.io/api/v3';

/**
 * Make HTTP request to Piano
 *
 * @param method - HTTP method
 * @param path - API endpoint path
 * @param requestParams - Params for a request
 * @param environment - API environment
 * @returns Response object wrapped in promise
 * @throws Error - occurs when an API request fails with non-zero code
 */
export const httpRequest = async (
  method: 'get' | 'post',
  path: string,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  requestParams: any,
  environment: Environment
): Promise<ApiResponse> => {
  const baseUrl =
    environment == 'us'
      ? usBaseUrl
      : environment == 'au'
      ? auBaseUrl
      : environment == 'ap'
      ? apBaseUrl
      : sandboxBaseUrl;

  const endpoint = `${baseUrl}${path}`;

  const urlParams = new URLSearchParams();
  for (const [key, value] of Object.entries(requestParams)) {
    if (Array.isArray(value)) {
      for (const entry of value) {
        urlParams.append(key, entry);
      }
    } else {
      urlParams.append(key, value as string);
    }
  }

  const response =
    method == 'get'
      ? await fetch(`${endpoint}?${urlParams}`)
      : await fetch(endpoint, {
          method: 'POST',
          body: urlParams,
        });

  const apiResponse = (await response.json()) as ApiResponse;

  if (apiResponse.code != 0) {
    console.log(apiResponse);
    throw new Error(apiResponse.message);
  }

  return apiResponse;
};
