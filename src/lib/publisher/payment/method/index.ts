import { Piano } from '../../../piano';
import { Gmo } from './gmo';

export class Method {
  public readonly gmo: Gmo;
  constructor(private readonly piano: Piano) {
    this.gmo = new Gmo(piano);
  }
}
