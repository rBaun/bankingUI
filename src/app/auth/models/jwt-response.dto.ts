import { AuthResponse } from "./auth-response.dto";

export interface JwtResponse extends AuthResponse {
    token: string;
}