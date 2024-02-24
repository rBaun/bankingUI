import { Observable } from "rxjs";
import { AuthRequest } from "src/app/shared/auth/models/auth-request.dto";

export interface AuthStrategy {
    register(credentials: AuthRequest): Observable<any>
    login(credentials: AuthRequest): Observable<any>
    logout(): void
    isLoggedIn(): boolean
}