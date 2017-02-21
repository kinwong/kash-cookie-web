import 'reflect-metadata';
import { Injectable } from '@angular/core';
import {Meteor} from 'meteor/meteor';
 
@Injectable()
export class AuthenticationService {

    public get user(): Meteor.User {
        return Meteor.user();
    }

    public login(username: string, password: string) {
        Meteor.loginWithPassword(username, password);
    }
 
    public logout() {
        Meteor.logout();
    }
}
