import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

/**
 * When user is not logged in, then AuthGuard will redirect to the login page
 */
export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const isLoggedIn = inject(AuthService).isLoggedIn();
  const redirectToLogin = inject(Router).createUrlTree(['/login']);

  return isLoggedIn ? true : redirectToLogin;
};
