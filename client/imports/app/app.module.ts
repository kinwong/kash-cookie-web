import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent }  from "./app.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

 /**
  * Represents the application root module.
  * 
  * @export
  * @class AppModule
  */
 @NgModule({
  bootstrap:    [ AppComponent ],
  declarations: [ AppComponent ],
  //providers: 
  imports:      [ BrowserModule, NgbModule.forRoot() ],
})
export class AppModule {

}
