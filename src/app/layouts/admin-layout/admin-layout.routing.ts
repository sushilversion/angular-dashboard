import { Routes } from '@angular/router';

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { SignInComponent } from '../../components/signin/signin.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'signin',      component: SignInComponent }

];
