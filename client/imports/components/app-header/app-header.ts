import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services';

@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-header',
  styles: ['./app-header.scss',
  ],
  template: `
    <header class="header">
      <md-toolbar>
        <h3 class="header__title">Kash-Cookie • Deep Learning Trading</h3>
      </md-toolbar>
    </header>
  `,
})
export class AppHeaderComponent {
  private open = false;
  constructor(public router: Router) {
    this.router.events.subscribe(() => {
      if (this.open) {
        this.toggleOpen();
      }
    });
  }

  private toggleOpen(): void {
    this.open = !this.open;
  }
}
