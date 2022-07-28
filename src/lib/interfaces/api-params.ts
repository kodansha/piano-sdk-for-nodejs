type OrderDirection = 'asc' | 'desc';

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
  order_direction?: OrderDirection;
}

export interface PublisherUserSearchParams {
  uid?: string;
  exclude_cf_metadata?: boolean;
  name?: string;
  email?: string;
  registered_from?: string;
  registered_until?: string;
  access_to_resources?: [string];
  converted_terms?: [string];
  access_from?: string;
  access_until?: string;
  converted_term_from?: string;
  converted_term_until?: string;
  redeemed_promotions?: [string];
  redeemed_promotion_from?: string;
  redeemed_promotion_until?: string;
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
  spent_from_date?: string;
  spent_until_date?: string;
  payment_methods?: [
    1 | 4 | 6 | 7 | 8 | 9 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21
  ];
  billing_failure_from?: string;
  billing_failure_until?: string;
  had_billing_failure?: boolean;
  has_payment?: boolean;
  upi_ext_customer_id?: string;
  credit_card_will_expire?: string;
  active_subscription_to_resources?: [string];
  has_active_subscription?: boolean;
  subscription_start_from?: string;
  subscription_start_until?: string;
  subscription_renew_from?: string;
  subscription_renew_until?: string;
  subscription_expire_from?: string;
  subscription_expire_until?: string;
  trial_expire_from?: string;
  trial_expire_until?: string;
  has_any_subscriptions?: boolean;
  has_subscription_will_renew?: boolean;
  has_unresolved_inquiry?: boolean;
  submitted_inquiry_from?: string;
  submitted_inquiry_until?: string;
  received_response_from?: string;
  received_response_until?: string;
  resolved_inquiry_from?: string;
  resolved_inquiry_until?: string;
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
  order_direction?: OrderDirection;
  esdebug?: boolean;
}

export interface PublisherUserUpdateParams {
  uid: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  create_from_external?: boolean;
}

export interface PublisherUserAccessCheckParams {
  uid: string;
  rid: string;
  cross_app?: boolean;
}

export interface PublisherUserAccessListParams {
  uid: string;
  expand_bundle?: boolean;
  offset: number;
  limit: number;
  cross_app?: boolean;
}

export interface PublisherSubscriptionGetParams {
  subscription_id: string;
}

export interface PublisherSubscriptionListParams {
  uid?: string;
  type?: string;
  start_date?: string;
  end_date?: string;
  q?: string;
  offset: number;
  limit: number;
  select_by?: string;
  status?: string;
}

export interface PublisherSubscriptionUpdateParams {
  subscription_id: string;
  next_bill_date?: string;
  auto_renew?: boolean;
  payment_method_id?: boolean;
  user_address_id?: boolean;
}

export interface PublisherConversionListParams {
  uid?: string;
  offset: number;
  limit: number;
}

export interface PublisherExportGetParams {
  export_id: string;
}

export interface PublisherExportDownloadParams {
  export_id: string;
}

export interface PublisherExportCreateTransactionsReportV2Params {
  export_name: string;
  transactions_type?: 'all' | 'purchases' | 'refunds';
  order_by?: string;
  order_direction?: OrderDirection;
  q?: string;
  date_from?: string;
  date_to?: string;
}

export interface PublisherExportCreateSubscriptionDetailsReportV2Params {
  export_name: string;
  q?: string;
  search_new_subscriptions?: boolean;
  new_subscriptions_created_from?: string;
  new_subscriptions_created_to?: string;
  search_active_now_subscriptions?: boolean;
  active_now_subscriptions_statuses?: any[];
  search_inactive_subscriptions?: boolean;
  inactive_subscriptions_statuses?: any[];
  subscriptions_inactive_from?: string;
  subscriptions_inactive_to?: string;
  search_updated_subscriptions?: boolean;
  updated_subscriptions_statuses?: any[];
  subscriptions_updated_from?: string;
  subscriptions_updated_to?: string;
  search_auto_renewing_subscriptions?: boolean;
  subscriptions_auto_renewing?: boolean;
  search_subscriptions_by_next_billing_date?: boolean;
  subscriptions_next_billing_date_from?: string;
  subscriptions_next_billing_date_to?: string;
  search_subscriptions_by_terms?: boolean;
  subscriptions_terms?: any[];
  subscriptions_term_types?: any[];
}
