import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountTransaction } from 'src/app/features/customer-dashboard/models/account-transaction.model';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  @Input({ required: true }) latestTransactionList$!: Observable<AccountTransaction[]>;

  constructor() { }

  ngOnInit() {
  }

}
