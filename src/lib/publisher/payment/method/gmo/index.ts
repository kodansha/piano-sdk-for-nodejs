import { PublisherPaymentMethodGmoRefreshParams } from '../../../../interfaces/api-params';
import { PublisherPaymentMethodGmoRefreshResponse } from '../../../../interfaces/api-response';
import { Piano } from '../../../../piano';
import { httpRequest } from '../../../../utils/http-request';

const ENDPOINT_PATH_PREFIX = '/publisher/payment/method/gmo';

export class Gmo {
  constructor(private readonly piano: Piano) {}

  /**
   * Sync payment method to GMO
   *
   * @see https://docs.piano.io/api?endpoint=post~2F~2Fpublisher~2Fpayment~2Fmethod~2Fgmo~2Frefresh
   */
  public async refresh(
    params: PublisherPaymentMethodGmoRefreshParams
  ): Promise<boolean> {
    const apiResponse = (await httpRequest(
      'post',
      `${ENDPOINT_PATH_PREFIX}/refresh`,
      this.piano.mergeParams(params),
      this.piano.baseUrl
    )) as PublisherPaymentMethodGmoRefreshResponse;

    return apiResponse.data;
  }
}
