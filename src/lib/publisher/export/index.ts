import { PublisherExportGetParams } from '../../interfaces/api-params';
import { PublisherExportGetResponse } from '../../interfaces/api-response';
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
      this.piano.environment
    )) as PublisherExportGetResponse;

    return apiResponse.export;
  }
}
