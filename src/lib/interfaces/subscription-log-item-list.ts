import { List } from './list';
import { SubscriptionLogItem } from './subscription-log-item';

export interface SubscriptionLogItemList extends List {
  subscriptionLogItems: SubscriptionLogItem[];
}
