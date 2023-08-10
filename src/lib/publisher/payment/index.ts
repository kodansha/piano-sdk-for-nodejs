import { Piano } from '../../piano';
import { Method } from './method';

export class Payment {
  public readonly method: Method;
  constructor(private readonly piano: Piano) {
    this.method = new Method(piano);
  }
}
