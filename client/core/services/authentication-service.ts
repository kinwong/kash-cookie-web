import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { MeteorObservable, MongoObservable } from 'meteor-rxjs';

import Rx from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Logger } from 'angular2-logger/core';

import { UserDetails } from '../../../both/api';

@Injectable()
export class AuthenticationService {
    constructor(private _router: Router, private _logger: Logger) {
    }
    public get isLoggingIn(): boolean {
        return Meteor.loggingIn();
    }
    public get isLoggedIn(): boolean {
        return Meteor.userId == null;
    }
    public get user(): Meteor.User {
        return Meteor.user();
    }
    public get userId(): string {
        return Meteor.userId();
    }
    public login(username: string, password: string): Rx.Observable<boolean> {
        const source = Rx.Observable.create(observer => {
            Meteor.loginWithPassword(username, password, error => {
                if (error != null) {
                    this._logger.error(error);
                    observer.error(error);
                } else {
                    observer.onNext(true);
                    observer.onCompleted();
                    this._router.navigate(['Home']);
                }
            });
            // Any cleanup logic might go here
            return () => this._logger.log('disposed');
        });

        return source;
    };
    public logout() {
        Meteor.logout();
    }

    public register(userDetails: UserDetails): Rx.Observable<boolean> {
        return null;

    }
}
