import { Component, Input, OnInit } from '@angular/core';
import { CustomerDetails } from '../../models/customer-details.model';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  @Input({ required: true }) customerDetails?: CustomerDetails;

  constructor() { }

  ngOnInit() {
  }

}
