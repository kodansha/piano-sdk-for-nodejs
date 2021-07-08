export interface UserPaymentInfo {
  user_payment_info_id: string;
  description: string;
  upi_nickname: string | null;
  upi_number: string;
  upi_expiration_month: number;
  upi_expiration_year: number;
  upi_postal_code: string | null;
  upi_identifier: string;
}
