import { NgModule, OnInit, OnDestroy, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Logger } from 'angular2-logger/core';
import { MaterialModule } from '@angular/material';

 /**
  * Represents the application root module.
  * 
  * @export
  * @class AppModule
  */
 @NgModule({
  bootstrap:    [ AppComponent ],
  declarations: [ AppComponent ],
  // providers: 
  imports: [ 
    BrowserModule, 
    MaterialModule.forRoot()],
    providers: [Logger],
})
export class AppModule implements OnInit, OnDestroy {
  constructor(private _logger: Logger) {
  }
  public ngOnInit(): void {
    this._logger.debug('ngOnInit');
  }
  public ngOnDestroy(): void {
    this._logger.debug('ngOnDestroy');
  }
}
