import { Resource } from './resource';
import { Term } from './term';
import { User } from './user';

export interface Access {
  access_id: string;
  parent_access_id: string | null;
  granted: boolean;
  revoked: boolean;
  resource: Resource;
  user: User;
  expire_date: number | null;
  start_date: number;
  can_revoke_access: boolean;
  term: Term;
}
