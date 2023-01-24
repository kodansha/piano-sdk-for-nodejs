import { Publisher } from './publisher';
import { Environment } from './interfaces/client';

export * from './interfaces/access';
export * from './interfaces/api-params';
export * from './interfaces/api-response';
export * from './interfaces/client';
export * from './interfaces/user';
export * from './interfaces/subscription-log-item';

export class Piano {
  private readonly aid: string;
  private readonly apiToken: string;

  public readonly environment: Environment;
  public readonly publisher: Publisher;

  constructor({
    aid,
    apiToken,
    environment,
  }: {
    aid: string;
    apiToken: string;
    environment: Environment;
  }) {
    this.aid = aid;
    this.apiToken = apiToken;
    this.environment = environment;

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
