import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private baseUrl = environment.apiUrl;

  /* Auth Endpoints */
  private baseAuthUrl = `${this.baseUrl}/auth`;
  registerUrl = (): string => `${this.baseAuthUrl}/register`;
  loginUrl = (): string => `${this.baseAuthUrl}/login`;

  /* Customer Endpoints */
  private baseCustomerUrl = `${this.baseUrl}/v1/customers`;
  updateCustomerUrl = (): string => `${this.baseCustomerUrl}/update`;
  createCustomerUrl = (): string => `${this.baseCustomerUrl}/create`;
  searchCustomersUrl = (searchTerm: string): string => `${this.baseCustomerUrl}/${searchTerm}`;
  getAllCustomersUrl = (): string => `${this.baseCustomerUrl}/all`;
  deleteCustomerUrl = (): string => `${this.baseCustomerUrl}/delete`;

  /* Account Endpoints */
  private baseAccountUrl = `${this.baseUrl}/v1/accounts`;
  withdrawUrl = (): string => `${this.baseAccountUrl}/withdraw`;
  transferUrl = (): string => `${this.baseAccountUrl}/transfer`;
  depositUrl = (): string => `${this.baseAccountUrl}/deposit`;
  createAccountUrl = (): string => `${this.baseAccountUrl}/create`;
  getAccountUrl = (accountNumber: string): string => `${this.baseAccountUrl}/${accountNumber}`;
  getTransactionsUrl = (accountNumber: string): string => `${this.baseAccountUrl}/${accountNumber}/transactions`;
  getAllAccountsUrl = (): string => `${this.baseAccountUrl}/all`;
  deleteAccountUrl = (accountNumber: string): string => `${this.baseAccountUrl}/delete/${accountNumber}`;
}
