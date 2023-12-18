import { Piano } from '../../../piano';
import { SubscriptionDetailsReport } from './subscription-details-report';
import { TransactionsReport } from './transactions-report';
import { UserExportReport } from './user-export';

export class Create {
  public readonly transactionsReport: TransactionsReport;
  public readonly subscriptionDetailsReport: SubscriptionDetailsReport;
  public readonly userExportReport: UserExportReport;
  ;
  constructor(piano: Piano) {
    this.transactionsReport = new TransactionsReport(piano);
    this.subscriptionDetailsReport = new SubscriptionDetailsReport(piano);
    this.userExportReport = new UserExportReport(piano);
  }
}
