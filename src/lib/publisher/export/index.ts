import {
  PublisherExportDownloadParams,
  PublisherExportGetParams,
  PublisherExportRunParams,
} from '../../interfaces/api-params';
import {
  PublisherExportDownloadResponse,
  PublisherExportGetResponse,
  PublisherExportRunResponse,
} from '../../interfaces/api-response';
import { Export as IExport } from '../../interfaces/export';
import { Piano } from '../../piano';
import { httpRequest } from '../../utils/http-request';
import { Create } from './create';

const ENDPOINT_PATH_PREFIX = '/publisher/export';

export class Export {
  public readonly create: Create;
  constructor(private readonly piano: Piano) {
    this.create = new Create(piano);
  }

  /**
   * Get report
   *
   * @see https://docs.piano.io/api?endpoint=get~2F~2Fpublisher~2Fexport~2Fget
   */

  public async get(params: PublisherExportGetParams): Promise<IExport> {
    const apiResponse = (await httpRequest(
      'get',
      `${ENDPOINT_PATH_PREFIX}/get`,
      this.piano.mergeParams(params),
      this.piano.baseUrl
    )) as PublisherExportGetResponse;

    return apiResponse.export;
  }

  /**
   * Rerun report generation
   *
   * @see https://docs.piano.io/api/?endpoint=get~2F~2Fpublisher~2Fexport~2Frun
   */

  public async run(params: PublisherExportRunParams): Promise<boolean> {
    const apiResponse =(await httpRequest(
      'get',
      `${ENDPOINT_PATH_PREFIX}/run`,
      this.piano.mergeParams(params),
      this.piano.baseUrl
    )) as PublisherExportRunResponse;

    return apiResponse.data;
  }

  /**
   * Get URL for download
   *
   * @see https://docs.piano.io/api?endpoint=get~2F~2Fpublisher~2Fexport~2Fdownload
   */

  public async download(
    params: PublisherExportDownloadParams
  ): Promise<string> {
    const apiResponse = (await httpRequest(
      'get',
      `${ENDPOINT_PATH_PREFIX}/download`,
      this.piano.mergeParams(params),
      this.piano.baseUrl
    )) as PublisherExportDownloadResponse;

    return apiResponse.data;
  }
}
