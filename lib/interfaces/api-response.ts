import { User } from "./user";

export interface ApiResponse {
  code: number;
  ts: number;
  message?: string;
  user?: User;
  users?: [User];
  data?: any;
  access?: any;
}
