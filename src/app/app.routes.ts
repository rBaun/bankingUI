import { Routes } from "@angular/router";

export const MAIN_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        loadChildren: () => import('./features/login/login.routes')
            .then(m => m.LOGIN_ROUTES)
    }
]