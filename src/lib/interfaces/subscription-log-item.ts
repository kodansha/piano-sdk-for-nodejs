import { Term } from './term';

export interface SubscriptionLogItem {
  subscription_id: string;
  email: string;
  uid: string;
  rid: string;
  term: Term;
  billing_plan: string;
  start_date: number;
  next_bill_date: number;
  status_name_in_reports: string;
  child_access: string;
}
