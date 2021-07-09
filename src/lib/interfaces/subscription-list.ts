import { List } from './list';
import { Subscription } from './subscription';

export interface SubscriptionList extends List {
  subscriptions: Subscription[];
}
