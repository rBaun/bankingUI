// auth-strategy.factory.ts
import { Injectable } from '@angular/core';
import { AuthType } from '../models/strategy-type.model';
import { AuthStrategy } from './auth-strategy.interface';
import { JwtAuthStrategy } from './jwt-auth.strategy';

@Injectable({
    providedIn: 'root'
})
export class AuthStrategyFactory {
    constructor(
        private jwtAuthStrategy: JwtAuthStrategy
    ) { }

    createAuthStrategy(type: AuthType): AuthStrategy {
        switch (type) {
            case 'jwt':
                return this.jwtAuthStrategy;
            default:
                throw new Error('Unsupported authentication strategy');
        }
    }
}
