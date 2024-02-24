import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/library/services/config.service';
import { AuthRequest } from '../models/auth-request.dto';
import { JwtResponse } from '../models/jwt-response.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  register = (credentials: AuthRequest) => this.http.post<JwtResponse>(this.config.registerUrl(), credentials);
  login = (credentials: AuthRequest) => this.http.post<JwtResponse>(this.config.loginUrl(), credentials);
}
