import { Subscription } from './subscription';
import { Term } from './term';

export interface UserPayment {
  user_payment_id: string;
  create_date: string;
  renewal: boolean;
  amount: number;
  price: string;
  currency: string;
  subscription: Subscription;
  payment_method: string;
  upi_ext_customer_id: string;
  upi_ext_customer_id_label: string | null;
  term: Term;
  refundable: boolean;
  tax_billing_plan: string;
  external_transaction_id: string;
  tracking_id: string;
  tax: number;
}
