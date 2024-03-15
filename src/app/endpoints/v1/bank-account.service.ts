import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BankAccount } from 'src/app/features/customer-dashboard/models/bank-account.model';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor() { }

  getBankAccounts = (): Observable<BankAccount[]> => {
    return of([
      {
        title: 'Savings Account',
        accountNumber: '1234567890',
        balance: 1000
      },
      {
        title: 'Current Account',
        accountNumber: '0987654321',
        balance: 5000
      }
    ]);
  }

}
