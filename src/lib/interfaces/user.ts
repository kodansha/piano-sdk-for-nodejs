export interface User {
  first_name: string;
  last_name: string;
  email: string;
  personal_name?: string | null;
  uid: string;
  image1: string;
  create_date: any;
  reset_password_email_sent?: boolean;
  custom_fields?: any;
}
