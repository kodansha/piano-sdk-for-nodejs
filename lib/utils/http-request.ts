import request, { Response } from "request";

import { ApiResponse } from "../interfaces/api-response";
import { ApiError } from "../interfaces/api-error";

const productionBaseUrl = "https://api.tinypass.com/api/v3";
const sandboxBaseUrl = "https://sandbox.tinypass.com/api/v3";

/**
 * Make HTTP request to Piano
 */
export const httpRequest = (
  method: "get" | "post",
  path: string,
  requestParams: any,
  sandbox?: boolean
): Promise<ApiResponse> => {
  const baseUrl = sandbox ? sandboxBaseUrl : productionBaseUrl;
  const endpoint = `${baseUrl}${path}`;

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
          detail: bodyData
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
