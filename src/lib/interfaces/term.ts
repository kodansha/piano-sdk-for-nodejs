import { Resource } from './resource';

export interface Term {
  aid: string;
  term_id: string;
  resource: Resource;
  name: string;
  description: string;
  type: string;
  type_name: string;
  create_date: number;
  update_date: number;
  shared_account_count: number | null;
  shared_redemption_url: number | null;
}
