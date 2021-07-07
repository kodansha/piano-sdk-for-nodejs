import { Piano } from '../../piano';
import { PublisherSubscriptionListPrarams } from '../../interfaces/api-params';
import { SubscriptionList as ISubscriptionList } from '../../interfaces/subscription-list';
import { httpRequest } from '../../utils/http-request';
import { PublisherSubscriptionListResponse } from '../../interfaces/api-response';

const ENDPOINT_PATH_PREFIX = '/publisher/subscription';

export class Subscription {
  private readonly piano: Piano;
  constructor(piano: Piano) {
    this.piano = piano;
  }

  /**
   * Lists subscriptions.
   *
   * @see https://docs.piano.io/api?endpoint=get~2F~2Fpublisher~2Fsubscription~2Flist
   */
  public async list(
    params: PublisherSubscriptionListPrarams
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
