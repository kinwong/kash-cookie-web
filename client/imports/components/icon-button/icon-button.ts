import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'icon-button',
  styles: ['./icon-button.scss'],
  template: `
    <button
      [attr.aria-label]="label"
      class="btn btn--icon btn--{{icon}} {{className}}"
      (click)="onClick.emit($event)"
      type="button">
      <icon [name]="icon"></icon>
    </button>
  `,
})
export class IconButtonComponent {
  @Input() public className: string;
  @Input() public icon: string;
  @Input() public label: string;

  @Output() public onClick = new EventEmitter(false);
}
