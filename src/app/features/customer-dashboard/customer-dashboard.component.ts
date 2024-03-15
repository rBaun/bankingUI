import { Component, OnInit } from '@angular/core';
import { CustomerDetailsComponent } from './component/customer-details/customer-details.component';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss'],
  imports: [
    CustomerDetailsComponent
  ]
})
export class CustomerDashboardComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

}
