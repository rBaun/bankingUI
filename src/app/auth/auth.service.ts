import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthStrategyFactory } from './factory/auth-strategy.factory';
import { AuthStrategy } from './factory/auth-strategy.interface';
import { AuthRequest } from './models/auth-request.dto';
import { AuthType } from './models/strategy-type.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private strategy: AuthStrategy

  constructor(
    private authStrategyFactory: AuthStrategyFactory
  ) {
    this.strategy = this.authStrategyFactory.createAuthStrategy(environment.authStrategy as AuthType)
  }

  register = (credentials: AuthRequest): Observable<any> => this.strategy.register(credentials);
  login = (credentials: AuthRequest): Observable<any> => this.strategy.login(credentials)
  logout = (): void => this.strategy.logout();
  isLoggedIn = (): boolean => this.strategy.isLoggedIn();
}
