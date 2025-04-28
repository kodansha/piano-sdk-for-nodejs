export enum SubscriptionUpgradeStatusFlag {
  PENDING = 0,
  FAILED = 1,
  FAILED_CLOSED = 2,
  SUSPENDED = 3,
}

export interface SubscriptionUpgradeStatus {
  from_term_name: string | null;
  to_term_name: string | null;
  from_term_id: string | null;
  to_term_id: string | null;
  change_date: string | null;
  create_date_from: string | null;
  create_date_to: string | null;
  billing_plan_to: string | null;
  billing_plan_from: string | null;
  status: SubscriptionUpgradeStatusFlag;
  error_message: string;
  prorate_amount: string | null;
  prorate_refund_amount: string | null;
}
