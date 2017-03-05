import { Routes } from '@angular/router';
import {
  HomePageComponent, PageNotFoundComponent, LoginPageComponent, RegisterPageComponent
} from '../core/components';
import { PermissionGuard } from '../core/services/permission-guard';

export const ALL_ROUTES: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomePageComponent, canActivate: [PermissionGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
//  { path: 'userlist', component: UserListComponent, canActivate: [PermissionGuard]} ,
  { path: '**', component: PageNotFoundComponent }
];
