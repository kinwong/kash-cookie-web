import 'reflect-metadata';
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services';

import template from './app-header.html';
import style from './app-header.scss';

@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-header',
  //styles: [style],
  template
})
export class AppHeaderComponent {
  public isLoggedIn: boolean;
  public user: string;
  private open = false;

  constructor(private _router: Router, private _authenticationService: AuthenticationService) {
    this.user = '????';
    
    this._router.events.subscribe(() => {
      if (this.open) {
        this.toggleOpen();
      }
    });
  }

  private toggleOpen(): void {
    this.open = !this.open;
  }
}
