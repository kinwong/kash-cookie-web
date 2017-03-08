import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Logger } from 'angular2-logger/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {
    private readonly _subject = new Subject<any>();
    private _keepAfterNavigationChange = false;

    constructor(private _logger: Logger, private _router: Router) {
        // clear alert message on route change
        _router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this._keepAfterNavigationChange) {
                    // only keep for a single location change
                    this._keepAfterNavigationChange = false;
                } else {
                    // clear alert
                    this._subject.next();
                }
            }
        });
    }
    
    public success(message: string, keepAfterNavigationChange = false) {
        this._keepAfterNavigationChange = keepAfterNavigationChange;
        this._subject.next({ type: 'success', text: message });
    }
    public error(message: string, keepAfterNavigationChange = false) {
        this._keepAfterNavigationChange = keepAfterNavigationChange;
        this._subject.next({ type: 'error', text: message });
    }
    public getMessage(): Observable<any> {
        return this._subject.asObservable();
    }
}
