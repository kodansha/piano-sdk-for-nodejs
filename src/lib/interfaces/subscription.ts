import { Resource } from './resource';
import { Term } from './term';
import { User } from './user';

export interface Subscription {
  subscription_id: string;
  auto_renew: boolean;
  next_bill_date: number;
  payment_method: string;
  user_payment_info_id: string;
  upi_ext_customer_id: string;
  upi_ext_customer_id_label: string | null;
  billing_plan: string;
  end_date: number;
  cancelable: boolean;
  cancelable_and_refundadle: boolean;
  status: string;
  status_name: string;
  status_name_in_reports: string;
  term: Term;
  user: User;
  resource: Resource;
  start_date: number;
  is_in_trial: boolean;
  trial_period_end_date: number;
  trial_amount: number;
  trial_currency: string;
  charge_count: number;
}
