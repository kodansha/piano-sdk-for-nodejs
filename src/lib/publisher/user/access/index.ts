import { Piano } from '../../../piano';
import { httpRequest } from '../../../utils/http-request';
import { Active } from './active';
import {
  PublisherUserAccessCheckParams,
  PublisherUserAccessListParams,
} from '../../../interfaces/api-params';
import {
  PublisherUserAccessCheckResponse,
  PublisherUserAccessListResponse,
} from '../../../interfaces/api-response';
import { AccessDTO } from '../../../interfaces/access-dto';

const ENDPOINT_PATH_PREFIX = '/publisher/user/access';

export class Access {
  private readonly piano: Piano;
  public readonly active: Active;

  constructor(piano: Piano) {
    this.piano = piano;
    this.active = new Active(piano);
  }

  /**
   * Check if user has access to a specific resource
   *
   * @see https://docs.piano.io/api?endpoint=get~2F~2Fpublisher~2Fuser~2Faccess~2Fcheck
   */
  public async check(params: PublisherUserAccessCheckParams): Promise<AccessDTO> {
    const apiResponse = (await httpRequest(
      'post',
      `${ENDPOINT_PATH_PREFIX}/check`,
      this.piano.mergeParams(params),
      this.piano.environment
    )) as PublisherUserAccessCheckResponse;

    return apiResponse.access;
  }

  /**
   * Lists a user's access
   *
   * @see https://docs.piano.io/api?endpoint=get~2F~2Fpublisher~2Fuser~2Faccess~2Flist
   */
  public async list(params: PublisherUserAccessListParams): Promise<AccessDTO[]> {
    const apiResponse = (await httpRequest(
      'get',
      `${ENDPOINT_PATH_PREFIX}/list`,
      this.piano.mergeParams(params),
      this.piano.environment
    )) as PublisherUserAccessListResponse;

    return apiResponse.accesses;
  }
}
