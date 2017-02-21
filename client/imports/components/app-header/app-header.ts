import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-header',
  styles: ['app-header',
  ],
  template: `
    <header class="header">
      <div class="g-row g-cont">
        <div class="g-col">
          <h1 class="header__title">Kash-Cookie • Deep Learning Trading</h1>
          <ul class="header__actions">
            <li>
              // <icon-button icon="search-alt" (onClick)="toggleOpen()"></icon-button>
            </li>
            <li>
              <icon-button icon="soundcloud"></icon-button>
            </li>
            <li>
              <a class="link link--github" href="https://github.com/r-park/soundcloud-ngrx">
                <icon name="github"></icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
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
