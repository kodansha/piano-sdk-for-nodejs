import { Piano } from '../../../piano';
import { TransactionsReport } from './transactions-report';

export class Create {
  public readonly transactionsReport: TransactionsReport;
  constructor(piano: Piano) {
    this.transactionsReport = new TransactionsReport(piano);
  }
}
