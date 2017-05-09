import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { MeteorObservable } from 'meteor-rxjs';
import * as api from '../../../../imports/api';
import template from './strategy-list.html';

@Component({
  moduleId: module.id,
  selector: 'strategy-list',
  template
})
export class StrategyListComponent implements OnInit, OnDestroy {
  public strategies: Observable<any> = null;
  
  constructor() {
  }
  public ngOnInit(): void {
    console.log('ngOnInit');
    this.strategies = MeteorObservable
      .subscribe('strategies').do(x => {
        console.log(x);
      }).zone();
  }
  public ngOnDestroy(): void {
  }
}
