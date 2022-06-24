import { List } from './list';
import { UserSubscription } from './user-subscription';

export interface UserSubscriptionList extends List {
  subscriptions: UserSubscription[];
}
