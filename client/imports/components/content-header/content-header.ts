import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'content-header',
  styles: ['./content-header.scss'],
  template: `
    <header class="content-header">
      <div class="g-row g-cont">
        <div class="g-col">
          <div class="content-header__section">{{section}} /</div>
          <h1 class="content-header__title">{{title}}</h1>
        </div>
      </div>
    </header>
  `,
})
export class ContentHeaderComponent {
  @Input() public section: string;
  @Input() public title: string;
}
