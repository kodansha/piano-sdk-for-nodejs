import { PublisherExportCreateUserExportV2Params } from '../../../../interfaces/api-params';
import { PublisherExportCreateUserExportV2Response } from '../../../../interfaces/api-response';
import { Export as IExport } from '../../../../interfaces/export';
import { httpRequest } from '../../../../utils/http-request';
import { Piano } from '../../../../piano';

const ENDPOINT_PATH_PREFIX = '/publisher/export/create/userExport';

export class UserExportReport {
  constructor(private readonly piano: Piano) {}

  /**
   * Create a user search report
   *
   * @see https://docs.piano.io/api?endpoint=post~2F~2Fpublisher~2Fexport~2Fcreate~2FuserExport
   */

  public async v2(
    params: PublisherExportCreateUserExportV2Params
  ): Promise<IExport> {
    const apiResponse = (await httpRequest(
      'post',
      `${ENDPOINT_PATH_PREFIX}`,
      this.piano.mergeParams(params),
      this.piano.environment
    )) as PublisherExportCreateUserExportV2Response

    return apiResponse.export;
  }
}
