import { Resource } from './resource';
import { Term } from './term';
import { User } from './user';

export interface UserSubscription {
  subscription_id: string,
  auto_renew: boolean,
  next_bill_date: string,
  payment_method: string,
  billing_plan: string,
  user_payment_info_id: string,
  status: string,
  status_name: string,
  status_name_in_reports: string,
  term: Term,
  resource: Resource,
  user: User,
  start_date: string,
  cancelable: boolean,
  cancelable_and_refundadle?: boolean,
  psc_subscriber_number?: string | null,
  external_api_name?: string | null,
  conversion_result?: string | null,
  is_in_trial: boolean,
  trial_period_end_date?: string,
  trial_amount: number | null,
  trial_currency: string | null,
  end_date?: string,
  charge_count: number,
  upi_ext_customer_id: string,
  upi_ext_customer_id_label: string | null,
  shared_account_limit?: number,
  can_manage_shared_subscription?: boolean,
}
