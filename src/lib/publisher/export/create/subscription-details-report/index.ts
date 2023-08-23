import { Export as IExport } from '../../../../interfaces/export';
import { httpRequest } from '../../../../utils/http-request';
import { Piano } from '../../../../piano';
import { PublisherExportCreateSubscriptionDetailsReportV2Params } from '../../../../interfaces/api-params';
import { PublisherExportCreateSubscriptionDetailsReportV2Response } from '../../../../interfaces/api-response';

const ENDPOINT_PATH_PREFIX =
  '/publisher/export/create/subscriptionDetailsReport';

export class SubscriptionDetailsReport {
  constructor(private readonly piano: Piano) {}

  /**
   * Create subscription details report with account of timezone
   *
   * @see https://docs.piano.io/api?endpoint=post~2F~2Fpublisher~2Fexport~2Fcreate~2FsubscriptionDetailsReport~2Fv2
   */

  public async v2(
    params: PublisherExportCreateSubscriptionDetailsReportV2Params
  ): Promise<IExport> {
    const apiResponse = (await httpRequest(
      'post',
      `${ENDPOINT_PATH_PREFIX}/v2`,
      this.piano.mergeParams(params),
      this.piano.baseUrl
    )) as PublisherExportCreateSubscriptionDetailsReportV2Response;

    return apiResponse.export;
  }
}
