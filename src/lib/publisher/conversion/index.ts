import { Piano } from '../../piano';
import { ConversionList as IConversionList } from '../../interfaces/conversion-list';
import { httpRequest } from '../../utils/http-request';
import { PublisherConversionListParams } from '../../interfaces/api-params';
import { PublisherConversionListResponse } from '../../interfaces/api-response';

const ENDPOINT_PATH_PREFIX = '/publisher/conversion';

export class Conversion {
  constructor(private readonly piano: Piano) {}

  /**
   * Lists conversions for an app
   *
   * @see https://docs.piano.io/api?endpoint=get~2F~2Fpublisher~2Fconversion~2Flist
   */
  public async list(
    params: PublisherConversionListParams
  ): Promise<IConversionList> {
    const apiResponse = (await httpRequest(
      'get',
      `${ENDPOINT_PATH_PREFIX}/list`,
      this.piano.mergeParams(params),
      this.piano.baseUrl
    )) as PublisherConversionListResponse;

    const { limit, offset, total, count, conversions } = apiResponse;

    return {
      limit,
      offset,
      total,
      count,
      conversions,
    };
  }
}
