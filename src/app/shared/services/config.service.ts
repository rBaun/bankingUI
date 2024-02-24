import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private API_BASE_URL = environment.apiUrl;

  /* Auth Endpoints */
  private AUTH_BASE_URL = `${this.API_BASE_URL}/auth`;
  registerUrl = (): string => `${this.AUTH_BASE_URL}/register`;
  loginUrl = (): string => `${this.AUTH_BASE_URL}/login`;

  /* Customer Endpoints */
  private CUSTOMER_BASE_URL = `${this.API_BASE_URL}/v1/customers`;
  updateCustomerUrl = (): string => `${this.CUSTOMER_BASE_URL}/update`;
  createCustomerUrl = (): string => `${this.CUSTOMER_BASE_URL}/create`;
  searchCustomersUrl = (searchTerm: string): string => `${this.CUSTOMER_BASE_URL}/${searchTerm}`;
  getAllCustomersUrl = (): string => `${this.CUSTOMER_BASE_URL}/all`;
  deleteCustomerUrl = (): string => `${this.CUSTOMER_BASE_URL}/delete`;

  /* Account Endpoints */
  private ACCOUNT_BASE_URL = `${this.API_BASE_URL}/v1/accounts`;
  withdrawUrl = (): string => `${this.ACCOUNT_BASE_URL}/withdraw`;
  transferUrl = (): string => `${this.ACCOUNT_BASE_URL}/transfer`;
  depositUrl = (): string => `${this.ACCOUNT_BASE_URL}/deposit`;
  createAccountUrl = (): string => `${this.ACCOUNT_BASE_URL}/create`;
  getAccountUrl = (accountNumber: string): string => `${this.ACCOUNT_BASE_URL}/${accountNumber}`;
  getTransactionsUrl = (accountNumber: string): string => `${this.ACCOUNT_BASE_URL}/${accountNumber}/transactions`;
  getAllAccountsUrl = (): string => `${this.ACCOUNT_BASE_URL}/all`;
  deleteAccountUrl = (accountNumber: string): string => `${this.ACCOUNT_BASE_URL}/delete/${accountNumber}`;
}
