import { Access } from './access';
import { Subscription } from './subscription';
import { Term } from './term';
import { UserPayment } from './user-payment';
import { UserPaymentInfo } from './user-payment-info';

export interface Conversion {
  term_conversion_id: string;
  term: Term;
  aid: string;
  type: string;
  user_access: Access;
  create_date: number;
  browser_id: string;
  user_payment: UserPayment;
  user_payment_info: UserPaymentInfo;
  subscription: Subscription;
}
