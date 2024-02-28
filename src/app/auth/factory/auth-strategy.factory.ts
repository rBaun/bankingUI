// auth-strategy.factory.ts
import { Injectable } from '@angular/core';
import { AuthType } from '../models/strategy-type.model';
import { JwtAuthStrategy } from '../strategies/jwt-auth.strategy';
import { AuthStrategy } from './auth-strategy.interface';

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
