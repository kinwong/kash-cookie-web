import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-header',
  styles: ['./app-header.scss',
  ],
  template: `
    <header class="header">
      <md-toolbar>
        <span>
        <span><md-icon>mood</md-icon></span>
        <button md-button>I'm a basic generic button</button>
          <button><md-icon class="white-text">home</md-icon></button>
        </span>
        <span><md-icon>lock</md-icon></span>
        <span>
          <h3 class="header__title">
          Kash-Cookie • Deep Learning Trading
          </h3>
        </span>
    <button md-fab color="primary"><md-icon>home</md-icon></button>
    <button md-fab color="green"><md-icon class="md-24">favorite</md-icon></button>
    <button md-fab color="warn"><md-icon svgIcon="core:alarm"></md-icon></button>
      </md-toolbar>
    </header>
  `,
})
export class AppHeaderComponent {
  private open = false;
  constructor(private _router: Router, mdIconRegistry: MdIconRegistry) {
    mdIconRegistry.addSvgIconSet('fonts/core-icon-set.svg');
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
