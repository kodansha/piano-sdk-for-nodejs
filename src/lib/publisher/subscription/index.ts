import { Piano } from '../../piano';
import { PublisherSubscriptionListParams } from '../../interfaces/api-params';
import { SubscriptionList as ISubscriptionList } from '../../interfaces/subscription-list';
import { httpRequest } from '../../utils/http-request';
import { PublisherSubscriptionListResponse } from '../../interfaces/api-response';

const ENDPOINT_PATH_PREFIX = '/publisher/subscription';

export class Subscription {
  constructor(private readonly piano: Piano) {}

  /**
   * Lists subscriptions.
   *
   * @see https://docs.piano.io/api?endpoint=get~2F~2Fpublisher~2Fsubscription~2Flist
   */
  public async list(
    params: PublisherSubscriptionListParams
  ): Promise<ISubscriptionList> {
    const apiResponse = (await httpRequest(
      'get',
      `${ENDPOINT_PATH_PREFIX}/list`,
      this.piano.mergeParams(params),
      this.piano.environment
    )) as PublisherSubscriptionListResponse;

    const { limit, offset, total, count, subscriptions } = apiResponse;

    return {
      limit,
      offset,
      total,
      count,
      subscriptions,
    };
  }
}
