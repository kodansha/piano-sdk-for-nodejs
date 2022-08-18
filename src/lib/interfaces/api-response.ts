import { User } from './user';
import { UserSubscriptionList } from './user-subscription-list';
import { ConversionList } from './conversion-list';
import { Export } from './export';
import { UserSubscription } from './user-subscription';
import { AccessDTO } from './access-dto';
import { SubscriptionUpgradeStatus } from './subscription-upgrade-status';

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
  access: AccessDTO;
}

export interface PublisherUserAccessListResponse extends ApiResponse {
  accesses: AccessDTO[];
}

export interface PublisherUserAccessActiveCountResponse extends ApiResponse {
  data: number;
}

export interface PublisherSubscriptionGetResponse extends ApiResponse {
  subscription: UserSubscription
}

export interface PublisherSubscriptionListResponse
  extends ApiResponse,
    UserSubscriptionList {}

export interface PublisherSubscriptionUpdateResponse extends ApiResponse {
  data: boolean;
}

export interface PublisherConversionListResponse
  extends ApiResponse,
    ConversionList {}

export interface PublisherExportGetResponse extends ApiResponse {
  export: Export;
}
export interface PublisherExportDownloadResponse extends ApiResponse {
  data: string;
}

export interface PublisherExportCreateTransactionsReportV2Response
  extends ApiResponse {
  export: Export;
}

export interface PublisherExportCreateSubscriptionDetailsReportV2Response
  extends ApiResponse {
  export: Export;
}

export interface PublisherTermChangeGetSubscriptionUpgradeStatusResponse
  extends ApiResponse {
    subscription_upgrade_status: SubscriptionUpgradeStatus | undefined;
  }

export interface PublisherTermChangeCancelResponse
  extends ApiResponse {
    data: boolean;
  }
