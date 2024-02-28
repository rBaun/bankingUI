import { Routes } from "@angular/router";
import { CustomerHomePageComponent } from "src/app/pages/customer-home-page/customer-home-page.component";
import { AuthGuard } from "../auth.guard";

export const DASHBOARD_ROUTES: Routes = [{
    path: '',
    component: CustomerHomePageComponent,
    canActivate: [AuthGuard]
}]