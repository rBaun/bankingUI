// jwt-auth.strategy.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../../shared/services/config.service';
import { AuthStrategy } from '../factory/auth-strategy.interface';
import { AuthRequest } from '../models/auth-request.dto';
import { JwtResponse } from '../models/jwt-response.dto';

@Injectable({
    providedIn: 'root'
})
export class JwtAuthStrategy implements AuthStrategy {
    constructor(
        private http: HttpClient,
        private config: ConfigService
    ) { }

    register = (credentials: AuthRequest): Observable<any> => this.http.post<any>(this.config.registerUrl(), credentials);
    login = (credentials: AuthRequest): Observable<JwtResponse> => this.http.post<any>(this.config.loginUrl(), credentials)

    logout = (): void => {
        localStorage.removeItem('token');
        // this.store.dispatch(logout());
    }

    isLoggedIn = (): boolean => !!localStorage.getItem('token')
}
