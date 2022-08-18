export interface SubscriptionUpgradeStatus {
  from_term_name: string;
  to_term_name: string;
  from_term_id: string;
  to_term_id: string;
  change_date: string;
  create_date_from: string;
  create_date_to: string;
  billing_plan_to: string;
  billing_plan_from: string;
  status: number;
  error_message: string;
  prorate_amount: string;
  prorate_refund_amount: string;
}
