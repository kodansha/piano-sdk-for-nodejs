import { Piano } from '../piano';
import { Conversion } from './conversion';
import { Export } from './export';
import { Subscription } from './subscription';
import { Term } from './term';
import { User } from './user';
import { Payment } from './payment';

export class Publisher {
  public readonly user: User;
  public readonly subscription: Subscription;
  public readonly conversion: Conversion;
  public readonly export: Export;
  public readonly term: Term;
  public readonly payment: Payment;

  constructor(piano: Piano) {
    this.user = new User(piano);
    this.subscription = new Subscription(piano);
    this.conversion = new Conversion(piano);
    this.export = new Export(piano);
    this.term = new Term(piano);
    this.payment = new Payment(piano);
  }
}
