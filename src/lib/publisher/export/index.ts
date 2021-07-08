import { Piano } from '../../piano';
import { Create } from './create';

export class Export {
  public readonly create: Create;
  constructor(piano: Piano) {
    this.create = new Create(piano);
  }
}
