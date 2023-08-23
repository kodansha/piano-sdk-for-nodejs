import { PublisherExportCreateTransactionsReportV2Params } from '../../../../interfaces/api-params';
import { PublisherExportCreateTransactionsReportV2Response } from '../../../../interfaces/api-response';
import { Export as IExport } from '../../../../interfaces/export';
import { httpRequest } from '../../../../utils/http-request';
import { Piano } from '../../../../piano';

const ENDPOINT_PATH_PREFIX = '/publisher/export/create/transactionsReport';

export class TransactionsReport {
  constructor(private readonly piano: Piano) {}

  /**
   * Create downloadable transactions report with refunds and run it. Dates with time offset.
   *
   * @see https://docs.piano.io/api?endpoint=post~2F~2Fpublisher~2Fexport~2Fcreate~2FtransactionsReport~2Fv2
   */

  public async v2(
    params: PublisherExportCreateTransactionsReportV2Params
  ): Promise<IExport> {
    const apiResponse = (await httpRequest(
      'post',
      `${ENDPOINT_PATH_PREFIX}/v2`,
      this.piano.mergeParams(params),
      this.piano.baseUrl
    )) as PublisherExportCreateTransactionsReportV2Response;

    return apiResponse.export;
  }
}
