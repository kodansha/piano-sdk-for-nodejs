import { Conversion } from './conversion';
import { List } from './list';

export interface ConversionList extends List {
  conversions: Conversion[];
}
