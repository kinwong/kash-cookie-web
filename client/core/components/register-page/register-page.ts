import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Logger } from 'angular2-logger/core';
import { AlertService, AuthenticationService } from '../../services';

import template from './register-page.html';

@Component({
  moduleId: module.id,
  selector: 'register-page',
  template
})
export class RegisterPageComponent implements OnInit {
  public model: any = {};
  public loading = false;

  constructor(
    private _logger: Logger,
    private _route: ActivatedRoute,
    private _router: Router,
    private _authenticationService: AuthenticationService,
    private _alertService: AlertService) { }

  public ngOnInit(): void { }
  public register(): void {
    this._authenticationService.register(
      this.model.username, this.model.password, this.model.email, 
      {
        firstName: this.model.firstName,
        lastName: this.model.lastName
      })
      .subscribe(
        _ => {
          this._router.navigate(['login']);
        },
        error => {
          this._alertService.error(error);
          this.loading = false;
        },
        () => {
          this.loading = false;
        });
  }
}
