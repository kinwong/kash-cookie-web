import { Component, OnInit, OnDestroy } from "@angular/core";
import { Logger } from "angular2-logger/core";

/**
 * Represents the Kash-Cookie Application.
 * 
 * @export
 * @class AppComponent
 */
@Component({
  selector: "kash-cookie-app",
  templateUrl: "./app.component.html",
  providers: [Logger],
})
export class AppComponent implements OnInit, OnDestroy {
  public environment;

  constructor(private _logger: Logger) {
    this.environment = "Test";
  }
  public ngOnChanges() {
    this._logger.debug("ngOnChanges");
  }
  public ngOnInit(): void {
    this._logger.debug("ngOnInit");
  }
  public ngOnDestroy() {
    this._logger.debug("ngOnDestroy");
  }
}
