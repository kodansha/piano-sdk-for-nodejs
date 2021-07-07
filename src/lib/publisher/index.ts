import { Piano } from '../piano';
import { Subscription } from './subscription';
import { User } from './user';

export class Publisher {
  public readonly user: User;
  public readonly subscription: Subscription;

  constructor(piano: Piano) {
    this.user = new User(piano);
    this.subscription = new Subscription(piano);
  }
}
