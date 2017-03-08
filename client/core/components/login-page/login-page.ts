import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Logger } from 'angular2-logger/core';
import { AlertService, AuthenticationService } from '../../services';

import template from './login-page.html';
import style from './login-page.scss';

@Component({
  moduleId: module.id,
  // styles: [style],
  template,
})
export class LoginPageComponent implements OnInit {
  public model: any = {};
  public loading = false;
  private returnUrl: string;

  constructor(
    private _logger: Logger,
    private _route: ActivatedRoute,
    private _router: Router,
    private _authenticationService: AuthenticationService,
    private _alertService: AlertService) { }

  public ngOnInit() {
    // reset login status
    this._authenticationService.logout();
    // get return url from route parameters or default to '/'
  }

  public login() {
    this._logger.info('login');
    this.loading = true;
    this._authenticationService.login(this.model.username, this.model.password)
      .subscribe(
      data => {
        this._router.navigate([this.returnUrl]);
      },
      error => {
        this._alertService.error(error);
        this.loading = false;
      });
  }
}
