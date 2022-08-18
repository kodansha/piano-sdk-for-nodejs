import { Resource } from './resource';
import { User } from './user';

export interface AccessDTO {
  access_id: string;
  parent_access_id: string | null;
  granted: boolean;
  revoked: boolean;
  resource: Resource;
  user: User;
  expire_date: number | null;
  start_date: number;
  can_revoke_access: boolean;
}
