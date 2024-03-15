import { Component, OnInit } from '@angular/core';
import { AccountListComponent } from '@shared/components/account-list/account-list.component';
import { TransactionListComponent } from '@shared/components/transaction-list/transaction-list.component';
import { Subject, catchError, forkJoin } from 'rxjs';
import { AccountTransactionService } from 'src/app/endpoints/v1/account-transaction.service';
import { BankAccountService } from 'src/app/endpoints/v1/bank-account.service';
import { CustomerService } from 'src/app/endpoints/v1/customer.service';
import { CustomerDetailsComponent } from './component/customer-details/customer-details.component';
import { AccountTransaction } from './models/account-transaction.model';
import { BankAccount } from './models/bank-account.model';
import { CustomerDetails } from './models/customer-details.model';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss'],
  imports: [
    CustomerDetailsComponent,
    AccountListComponent,
    TransactionListComponent
  ]
})
export class CustomerDashboardComponent implements OnInit {

  customerDetails: CustomerDetails | undefined;
  bankAccountList$ = new Subject<BankAccount[]>();
  latestTransactionList$ = new Subject<AccountTransaction[]>();

  constructor(
    private customerService: CustomerService,
    private bankAccountService: BankAccountService,
    private accountTransactionService: AccountTransactionService
  ) { }

  ngOnInit() {
    let customerDetails = this.customerService.getCustomerDetails();
    let bankAccounts = this.bankAccountService.getBankAccounts();
    let latestTransactions = this.accountTransactionService.getLatestTransactions();

    forkJoin([customerDetails, bankAccounts, latestTransactions])
      .pipe(
        catchError((error) => {
          console.error('Error loading customer dashboard data', error);
          return [];
        })
      )
      .subscribe(([customerDetails, bankAccounts, latestTransactions]) => {
        this.customerDetails = customerDetails;
        this.bankAccountList$.next(bankAccounts);
        this.latestTransactionList$.next(latestTransactions);
      });
  }

}
