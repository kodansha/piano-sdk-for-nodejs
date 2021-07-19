import { User } from './user';
import { Access } from './access';
import { SubscriptionList } from './subscription-list';
import { ConversionList } from './conversion-list';
import { Export } from './export';

export interface ApiResponse {
  code: number;
  ts: number;
  message?: string;
}

export interface PublisherUserCreateResponse extends ApiResponse {
  user: User;
}

export interface PublisherUserGetResponse extends ApiResponse {
  user: User;
}

export interface PublisherUserListResponse extends ApiResponse {
  users: User[];
}

export interface PublisherUserSearchResponse extends ApiResponse {
  users: User[];
}

export interface PublisherUserUpdateResponse extends ApiResponse {
  user: User;
}

export interface PublisherUserAccessCheckResponse extends ApiResponse {
  access: Access;
}

export interface PublisherUserAccessListResponse extends ApiResponse {
  accesses: Access[];
}

export interface PublisherUserAccessActiveCountResponse extends ApiResponse {
  data: number;
}

export interface PublisherSubscriptionListResponse
  extends ApiResponse,
    SubscriptionList {}

export interface PublisherConversionListResponse
  extends ApiResponse,
    ConversionList {}

export interface PublisherExportCreateTransactionsReportV2Response
  extends ApiResponse {
  export: Export;
}

export interface PublisherExportCreateSubscriptionDetailsReportV2Response
  extends ApiResponse {
  export: Export;
}
