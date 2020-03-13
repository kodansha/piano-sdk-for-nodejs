import { Piano } from "../piano";
import { httpRequest } from "../utils/http-request";

import { User as IUser } from "../interfaces/user";
import {
  PublisherUserCreateParams,
  PublisherUserDisableParams,
  PublisherUserGetParams,
  PublisherUserListParams,
  PublisherUserSearchParams,
  PublisherUserUpdateParams
} from "../interfaces/api-params";

const ENDPOINT_PATH_PREFIX = "/publisher/user";

export class User {
  private readonly piano: Piano;

  constructor(piano: Piano) {
    this.piano = piano;
  }

  /**
   * Creates a user
   *
   * @see https://docs.piano.io/api?endpoint=post~2F~2Fpublisher~2Fuser~2Fcreate
   */
  public async create(params: PublisherUserCreateParams): Promise<IUser> {
    const apiResponse = await httpRequest(
      "post",
      `${ENDPOINT_PATH_PREFIX}/create`,
      this.piano.mergeParams(params),
      this.piano.sandbox
    );

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return apiResponse.user!;
  }

  /**
   * Disables a user
   *
   * @see https://docs.piano.io/api?endpoint=post~2F~2Fpublisher~2Fuser~2Fdisable
   */
  public async disable(params: PublisherUserDisableParams): Promise<void> {
    await httpRequest(
      "post",
      `${ENDPOINT_PATH_PREFIX}/disable`,
      this.piano.mergeParams(params),
      this.piano.sandbox
    );
  }

  /**
   * Get a user
   *
   * @see https://docs.piano.io/api?endpoint=post~2F~2Fpublisher~2Fuser~2Fget
   */
  public async get(params: PublisherUserGetParams): Promise<IUser> {
    const apiResponse = await httpRequest(
      "post",
      `${ENDPOINT_PATH_PREFIX}/get`,
      this.piano.mergeParams(params),
      this.piano.sandbox
    );

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return apiResponse.user!;
  }

  /**
   *  Lists an app's users
   *
   * @see https://docs.piano.io/api?endpoint=post~2F~2Fpublisher~2Fuser~2Flist
   */
  public async list(params: PublisherUserListParams): Promise<[IUser]> {
    const apiResponse = await httpRequest(
      "post",
      `${ENDPOINT_PATH_PREFIX}/list`,
      this.piano.mergeParams(params),
      this.piano.sandbox
    );

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return apiResponse.users!;
  }

  /**
   *  Searches an app's users
   *
   * @see https://docs.piano.io/api?endpoint=post~2F~2Fpublisher~2Fuser~2Fsearch
   */
  public async search(params: PublisherUserSearchParams): Promise<[IUser]> {
    const apiResponse = await httpRequest(
      "post",
      `${ENDPOINT_PATH_PREFIX}/search`,
      this.piano.mergeParams(params),
      this.piano.sandbox
    );

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return apiResponse.users!;
  }

  /**
   *  Updates a user
   *
   * @see https://docs.piano.io/api?endpoint=post~2F~2Fpublisher~2Fuser~2Fupdate
   */
  public async update(params: PublisherUserUpdateParams): Promise<IUser> {
    const apiResponse = await httpRequest(
      "post",
      `${ENDPOINT_PATH_PREFIX}/update`,
      this.piano.mergeParams(params),
      this.piano.sandbox
    );

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return apiResponse.user!;
  }
}
