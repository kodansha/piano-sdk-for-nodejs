import { Publisher } from "./publisher";
import { Environment } from "./interfaces/client";

export * from "./interfaces/api-error";
export * from "./interfaces/api-params";
export * from "./interfaces/api-response";
export * from "./interfaces/user";

export class Piano {
  private readonly apiToken: string;
  private readonly aid: string;

  public readonly environment: Environment;
  public readonly publisher: Publisher;

  constructor(apiToken: string, aid: string, environment: Environment) {
    this.apiToken = apiToken;
    this.aid = aid;
    this.environment = environment;

    this.publisher = new Publisher(this);
  }

  public mergeParams(params: any): any {
    return {
      api_token: this.apiToken,
      aid: this.aid,
      ...params,
    };
  }
}
