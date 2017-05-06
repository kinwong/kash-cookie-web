import { Routes } from '@angular/router';
import {
  HomePageComponent, PageNotFoundComponent, LoginPageComponent, RegisterPageComponent
} from '../core/components';
import * as Services from '../core/services';

export const ALL_ROUTES: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomePageComponent, canActivate: [Services.PermissionGuardFake] },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
//  { path: 'userlist', component: UserListComponent, canActivate: [PermissionGuard]} ,
  { path: '**', component: PageNotFoundComponent }
];
