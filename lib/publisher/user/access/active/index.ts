import { Piano } from "../../../../piano";
import { httpRequest } from "../../../../utils/http-request";

const ENDPOINT_PATH_PREFIX = "/publisher/user/access/active";

export class Active {
  private readonly piano: Piano;

  constructor(piano: Piano) {
    this.piano = piano;
  }

  /**
   * Count active accesses
   *
   * @see https://docs.piano.io/api?endpoint=post~2F~2Fpublisher~2Fuser~2Faccess~2Factive~2Fcount
   */
  public async count(): Promise<number> {
    const apiResponse = await httpRequest(
      "post",
      `${ENDPOINT_PATH_PREFIX}/count`,
      this.piano.mergeParams({}),
      this.piano.sandbox
    );

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return apiResponse.data!;
  }
}
