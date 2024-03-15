import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

/**
 * When user already registered as customer, then redirect to dashboard. Otherwise, redirect to register
 */
export const DashboardGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
    const redirectToCustomerRegister = inject(Router).createUrlTree(['/customer/register']);
    const redirectToCustomerDashboard = inject(Router).createUrlTree(['/customer/dashboard']);
    // TODO: Check if User has registered a customer or not   
    const userHasRegisteredAsCustomer = false;

    return userHasRegisteredAsCustomer ? redirectToCustomerDashboard : redirectToCustomerRegister;
};
