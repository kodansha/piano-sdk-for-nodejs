import { App } from './app';
import { User } from './user';

export interface MailLog {
  email_id: string;
  app: App;
  user: User;
  sender: string;
  recipient: string;
  reply_to: string;
  create_date: string;
  open_date: string | null;
  status: string;
  status_localized: string;
  reject_reason: string | null;
  email_name: string;
  subject: string;
  body: string;
}
