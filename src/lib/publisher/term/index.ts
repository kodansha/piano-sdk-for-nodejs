import { Piano } from '../../piano';
import { Change } from './change';

export class Term {
  public readonly change: Change;
  constructor(private readonly piano: Piano) {
    this.change = new Change(piano);
  }
}
