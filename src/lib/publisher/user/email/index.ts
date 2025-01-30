import { Piano } from '../../../piano';
import { httpRequest } from '../../../utils/http-request';
import {
  PublisherUserEmailGetParams,
  PublisherUserEmailListParams,
} from '../../../interfaces/api-params';
import {
  PublisherUserEmailGetResponse,
  PublisherUserEmailListResponse,
} from '../../../interfaces/api-response';
import { MailLog } from '../../../interfaces/mail-log';

const ENDPOINT_PATH_PREFIX = '/publisher/user/email';

export class Email {
  private readonly piano: Piano;

  constructor(piano: Piano) {
    this.piano = piano;
  }

  /**
   * Returns the mail log of a given user email.
   * User.custom_fields are not populated for this endpoint.
   *
   * @see https://docs.piano.io/api?endpoint=get~2F~2Fpublisher~2Fuser~2Femail~2Fget
   */
  public async get(params: PublisherUserEmailGetParams): Promise<MailLog> {
    const apiResponse = (await httpRequest(
      'get',
      `${ENDPOINT_PATH_PREFIX}/get`,
      this.piano.mergeParams(params),
      this.piano.environment
    )) as PublisherUserEmailGetResponse;

    return apiResponse.email;
  }

  /**
   * Lists the emails sent to a given user.
   * User.custom_fields are not populated for this endpoint.
   *
   * @see https://docs.piano.io/api?endpoint=get~2F~2Fpublisher~2Fuser~2Femail~2Flist
   */
  public async list(params: PublisherUserEmailListParams): Promise<MailLog[]> {
    const apiResponse = (await httpRequest(
      'get',
      `${ENDPOINT_PATH_PREFIX}/list`,
      this.piano.mergeParams(params),
      this.piano.environment
    )) as PublisherUserEmailListResponse;

    return apiResponse.emails;
  }
}
