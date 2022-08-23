import {
  PublisherTermChangeCancelParams,
  PublisherTermChangeGetSubscriptionUpgradeStatusParams
} from '../../../interfaces/api-params'
import {
  PublisherTermChangeCancelResponse,
  PublisherTermChangeGetSubscriptionUpgradeStatusResponse
} from '../../../interfaces/api-response'
import { SubscriptionUpgradeStatus as ISubscriptionUpgradeStatus } from '../../../interfaces/subscription-upgrade-status';
import { Piano } from '../../../piano';
import { httpRequest } from '../../../utils/http-request';

const ENDPOINT_PATH_PREFIX = '/publisher/term/change';

export class Change {
  constructor (private readonly piano: Piano) {}

  /**
   * Get upgrade status of subscription
   *
   * @see https://docs.piano.io/api/?endpoint=post~2F~2Fpublisher~2Fterm~2Fchange~2FgetSubscriptionUpgradeStatus
   */
  public async getSubscriptionUpgradeStatus(params: PublisherTermChangeGetSubscriptionUpgradeStatusParams): Promise<ISubscriptionUpgradeStatus | undefined> {
    const apiResponse = (await httpRequest(
      'post',
      `${ENDPOINT_PATH_PREFIX}/getSubscriptionUpgradeStatus`,
      this.piano.mergeParams(params),
      this.piano.environment
    )) as PublisherTermChangeGetSubscriptionUpgradeStatusResponse;

    return apiResponse.subscription_upgrade_status;
  }

  /**
   * Cancel a pending term change for a subscription
   *
   * @see https://docs.piano.io/api/?endpoint=post~2F~2Fpublisher~2Fterm~2Fchange~2Fcancel
   */
  public async cancel(params: PublisherTermChangeCancelParams): Promise<boolean> {
    const apiResponse = (await httpRequest(
      'post',
      `${ENDPOINT_PATH_PREFIX}/cancel`,
      this.piano.mergeParams(params),
      this.piano.environment
    )) as PublisherTermChangeCancelResponse;

    return apiResponse.data;
  }
}
