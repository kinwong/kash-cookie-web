import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication-service';

@Injectable()
export class PermissionGuardFake implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  public canActivate(): boolean {
    return true;
  }
}
