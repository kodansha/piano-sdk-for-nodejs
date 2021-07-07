import { Subscription } from './subscription';

export interface SubscriptionList {
  limit: number;
  offset: number;
  total: number;
  count: number;
  subscriptions: Subscription[];
}
