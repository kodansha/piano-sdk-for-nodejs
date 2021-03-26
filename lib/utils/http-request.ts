import request, { Response } from "request";

import { Environment } from "../interfaces/client";
import { ApiResponse } from "../interfaces/api-response";
import { ApiError } from "../interfaces/api-error";

const usBaseUrl = "https://api.piano.io/api/v3";
const auBaseUrl = "https://api-au.piano.io/api/v3";
const apBaseUrl = "https://api-ap.piano.io/api/v3";
const sandboxBaseUrl = "https://sandbox.piano.io/api/v3";

/**
 * Make HTTP request to Piano
 *
 * @param method - HTTP method
 * @param path - API endpoint path
 * @param requestParams - Params for a request
 * @param environment - API environment
 * @returns Response object wrapped in promise
 */
export const httpRequest = (
  method: "get" | "post",
  path: string,
  requestParams: any,
  environment: Environment
): Promise<ApiResponse> => {
  const baseUrl =
    environment == "us"
      ? usBaseUrl
      : environment == "au"
      ? auBaseUrl
      : environment == "ap"
      ? apBaseUrl
      : sandboxBaseUrl;

  const endpoint = `${baseUrl}${path}`;
  console.log(endpoint);

  const callback = (
    resolve: (apiResponse: ApiResponse) => any,
    reject: (apiError: ApiError) => any
  ) => (error: any, _response: Response, body: any) => {
    if (error) {
      reject({ detail: error });
    }

    try {
      const bodyData = JSON.parse(body) as ApiResponse;

      if (bodyData.code != 0) {
        reject({
          code: bodyData.code,
          message: bodyData.message,
          detail: bodyData,
        });
      }
      resolve(bodyData);
    } catch (e) {
      reject({ detail: e });
    }
  };

  return new Promise<any>((resolve, reject) => {
    switch (method) {
      case "get":
        request.get(endpoint, { qs: requestParams }, callback(resolve, reject));
        break;
      case "post":
        request.post(
          endpoint,
          { form: requestParams },
          callback(resolve, reject)
        );
        break;
      default:
        break;
    }
  });
};
