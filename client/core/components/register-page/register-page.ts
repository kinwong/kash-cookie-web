import { Component, OnInit, OnDestroy } from '@angular/core';
import { Logger } from 'angular2-logger/core';

import template from './register-page.html';

@Component({
  moduleId: module.id,
  selector: 'register-page',
  template
})
export class RegisterPageComponent implements OnInit {
  constructor(private _logger: Logger) { }

  public ngOnInit() { }
  public ngOnDestroy() {
  }
}
