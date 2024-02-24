import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../library/services/config.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private config: ConfigService
    ) { }

    /**
     * Add Bearer token to the Authorization request header to all requests that requires a token
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');

        if (token && !this.isAuthEndpoint(request.url)) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(request);
    }

    private isAuthEndpoint = (url: string): boolean => url.includes(this.config.loginUrl()) || url.includes(this.config.registerUrl());
}