import { Routes } from '@angular/router';
import { HomePageComponent, PageNotFoundComponent, ResultPageComponent } from "../pages";
import { UserListComponent } from "../components";
import { PermissionGuard } from '../services/permission-guard';

export const ALL_ROUTES: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomePageComponent },
  { path: 'userlist', component: UserListComponent, canActivate: [PermissionGuard]} ,
  { path: '**', component: PageNotFoundComponent }
];
