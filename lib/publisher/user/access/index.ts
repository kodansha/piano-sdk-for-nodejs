import { Piano } from "../../../piano";
import { httpRequest } from "../../../utils/http-request";
import { Active } from "./active";
import { PublisherUserAccessCheckParams } from "../../../interfaces/api-params";

const ENDPOINT_PATH_PREFIX = "/publisher/user/access";

export class Access {
  private readonly piano: Piano;
  public readonly active: Active;

  constructor(piano: Piano) {
    this.piano = piano;
    this.active = new Active(piano);
  }

  /**
   * Check if user has access to a specific resource
   *
   * @see https://docs.piano.io/api?endpoint=get~2F~2Fpublisher~2Fuser~2Faccess~2Fcheck
   */
  public async check(params: PublisherUserAccessCheckParams): Promise<any> {
    const apiResponse = await httpRequest(
      "post",
      `${ENDPOINT_PATH_PREFIX}/check`,
      this.piano.mergeParams(params),
      this.piano.sandbox
    );

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return apiResponse.access!;
  }
}
