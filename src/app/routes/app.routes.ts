import { Routes } from "@angular/router";

export const MAIN_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.routes')
            .then(m => m.LOGIN_ROUTES)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.routes')
            .then(m => m.DASHBOARD_ROUTES)
    }
]