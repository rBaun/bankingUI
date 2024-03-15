import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomerDetails } from 'src/app/features/customer-dashboard/models/customer-details.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getCustomerDetails = (): Observable<CustomerDetails> => of({
    name: 'John Doe',
    email: 'john@doe.com',
    phoneNumber: '12312312',
    address: 'Street of Doe Join 123',
    dateOfBirth: '01/01/1990'
  });

}
