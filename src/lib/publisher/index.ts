import { Piano } from '../piano';
import { Conversion } from './conversion';
import { Subscription } from './subscription';
import { User } from './user';

export class Publisher {
  public readonly user: User;
  public readonly subscription: Subscription;
  public readonly conversion: Conversion;

  constructor(piano: Piano) {
    this.user = new User(piano);
    this.subscription = new Subscription(piano);
    this.conversion = new Conversion(piano);
  }
}
