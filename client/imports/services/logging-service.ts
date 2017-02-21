import {Meteor} from 'meteor/meteor';


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
