import { Routes } from '@angular/router';

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { SignInComponent } from '../../components/signin/signin.component';
import { CanActivateTodosGuard } from '../../can-activate-dashboard.guard';


export const AdminLayoutRoutes: Routes = [
    
    { path: 'signin',      component: SignInComponent },
    { path: 'dashboard',      
    component: DashboardComponent ,
    canActivate:[
        CanActivateTodosGuard
    ]}

];
