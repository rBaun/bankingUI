import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AccountTransaction } from 'src/app/features/customer-dashboard/models/account-transaction.model';

@Injectable({
  providedIn: 'root'
})
export class AccountTransactionService {

  constructor() { }

  getLatestTransactions = (): Observable<AccountTransaction[]> => {
    return of([
      {
        type: 'credit',
        amount: 1000,
        createdTime: new Date('2022-01-01'),
      },
      {
        type: 'debit',
        createdTime: new Date('2022-01-02'),
        amount: -100
      }
    ]);
  }

}
