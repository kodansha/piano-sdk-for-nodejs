import { Publisher } from './publisher';

export * from './interfaces/access';
export * from './interfaces/api-params';
export * from './interfaces/api-response';
export * from './interfaces/user';
export * from './interfaces/subscription-log-item';

export class Piano {
  private readonly aid: string;
  private readonly apiToken: string;
  public readonly baseUrl: string;

  public readonly publisher: Publisher;

  constructor({
    aid,
    apiToken,
    baseUrl,
  }: {
    aid: string;
    apiToken: string;
    baseUrl: string;
  }) {
    this.aid = aid;
    this.apiToken = apiToken;
    this.baseUrl = baseUrl;

    this.publisher = new Publisher(this);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public mergeParams(params: any): any {
    return {
      aid: this.aid,
      api_token: this.apiToken,
      ...params,
    };
  }
}
