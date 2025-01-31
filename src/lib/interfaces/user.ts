export interface User {
  first_name: string | null;
  last_name: string | null;
  email: string;
  personal_name?: string | null;
  uid: string;
  image1: string | null;
  create_date: number;
  reset_password_email_sent?: boolean;
  custom_fields?: any;
}
