import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BankAccount } from 'src/app/features/customer-dashboard/models/bank-account.model';

@Component({
  selector: 'app-account-list',
  standalone: true,
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  @Input({ required: true }) bankAccountList$!: Observable<BankAccount[]>;

  constructor() { }

  ngOnInit() {
  }

}
