import 'reflect-metadata';
import { Injectable } from '@angular/core';
import Rx from 'rxjs/Rx';
import { Meteor } from 'meteor/meteor';
import { Logger } from 'angular2-logger/core';
import { MeteorObservable } from 'meteor-rxjs';

@Injectable()
export class AuthenticationService {
    constructor(private logger: Logger) {
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
                    observer.error(error);
                } else {
                    observer.onNext(true);
                    observer.onCompleted();
                }
            });
            // Any cleanup logic might go here
            return () => this.logger.log('disposed');
        });

        return source;
    };
    public logout() {
        Meteor.logout();
    }
}
