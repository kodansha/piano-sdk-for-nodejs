import { Piano } from "../piano";
import { User } from "./user";

export class Publisher {
  private readonly _piano: Piano;
  public readonly user: User;

  constructor(piano: Piano) {
    this._piano = piano;
    this.user = new User(piano);
  }
}
