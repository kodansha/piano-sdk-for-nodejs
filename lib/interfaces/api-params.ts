export interface PublisherUserCreateParams {
  uid: string;
  email: string;
  first_name?: string;
  last_name?: string;
  create_from_external?: boolean;
}

export interface PublisherUserDisableParams {
  uid: string;
}

export interface PublisherUserGetParams {
  uid: string;
  disabled?: boolean;
}

export interface PublisherUserListParams {
  disabled?: boolean;
  q?: string;
  offset: number;
  limit: number;
  order_by?: string;
  order_direction?: "asc" | "desc";
}

export interface PublisherUserSearchParams {
  uid?: string;
  exclude_cf_metadata?: boolean;
  name?: string;
  email?: string;
  registered_from?: any;
  registered_until?: any;
  access_to_resources?: [string];
  converted_terms?: [string];
  access_from?: any;
  access_until?: any;
  converted_term_from?: any;
  converted_term_until?: any;
  redeemed_promotions?: [string];
  redeemed_promotion_from?: any;
  redeemed_promotion_until?: any;
  trial_period_is_active?: boolean;
  has_trial_period?: boolean;
  has_access?: boolean;
  has_conversion_term?: boolean;
  has_redeemed_promotion?: boolean;
  include_trial_redemptions?: boolean;
  converted_term_types?: [string];
  has_conversion_term_type?: boolean;
  spent_money_currency?: string;
  spent_money_from?: number;
  spent_money_until?: number;
  spent_from_date?: any;
  spent_until_date?: any;
  payment_methods?: [
    1 | 4 | 6 | 7 | 8 | 9 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21
  ];
  billing_failure_from?: any;
  billing_failure_until?: any;
  had_billing_failure?: boolean;
  has_payment?: boolean;
  upi_ext_customer_id?: string;
  credit_card_will_expire?: string;
  active_subscription_to_resources?: [string];
  has_active_subscription?: boolean;
  subscription_start_from?: any;
  subscription_start_until?: any;
  subscription_renew_from?: any;
  subscription_renew_until?: any;
  subscription_expire_from?: any;
  subscription_expire_until?: any;
  trial_expire_from?: any;
  trial_expire_until?: any;
  has_any_subscriptions?: boolean;
  has_subscription_will_renew?: boolean;
  has_unresolved_inquiry?: boolean;
  submitted_inquiry_from?: any;
  submitted_inquiry_until?: any;
  received_response_from?: any;
  received_response_until?: any;
  resolved_inquiry_from?: any;
  resolved_inquiry_until?: any;
  has_submitted_inquiry?: boolean;
  has_received_response_inquiry?: boolean;
  data_type?: [string];
  data?: string;
  has_data?: boolean;
  selected_consents_map?: [string];
  consent_checked?: boolean;
  custom_fields?: string;
  source?: string;
  invert_credit_card_will_expire?: boolean;
  has_resolved_inquiry?: boolean;
  consent_has_data?: boolean;
  q?: string;
  offset: number;
  limit: number;
  order_by?: string;
  order_direction?: "asc" | "desc";
  esdebug?: boolean;
}

export interface PublisherUserUpdateParams {
  uid: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  create_from_external?: boolean;
}
