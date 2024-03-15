/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccountTransactionService } from './account-transaction.service';

describe('Service: AccountTransaction', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountTransactionService]
    });
  });

  it('should ...', inject([AccountTransactionService], (service: AccountTransactionService) => {
    expect(service).toBeTruthy();
  }));
});
