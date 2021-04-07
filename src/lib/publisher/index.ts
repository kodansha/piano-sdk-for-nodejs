import { Piano } from "../piano";
import { User } from "./user";

export class Publisher {
  public readonly user: User;

  constructor(piano: Piano) {
    this.user = new User(piano);
  }
}
