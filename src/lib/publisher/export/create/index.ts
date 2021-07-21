import { Piano } from '../../../piano';
import { SubscriptionDetailsReport } from './subscription-details-report';
import { TransactionsReport } from './transactions-report';

export class Create {
  public readonly transactionsReport: TransactionsReport;
  public readonly subscriptionDetailsReport: SubscriptionDetailsReport;
  constructor(piano: Piano) {
    this.transactionsReport = new TransactionsReport(piano);
    this.subscriptionDetailsReport = new SubscriptionDetailsReport(piano);
  }
}
