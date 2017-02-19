import 'zone.js';
import 'reflect-metadata';
import { Component } from '@angular/core';
import { Accounts } from 'meteor/accounts-base';
import { AuthenticationService } from '../../services/login-service';

@Component({
  selector: 'kc-login',
  template: `
    <div>
    </div>
  `,
  providers: [AuthenticationService]
})
export class LoginComponent {
  private rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  private columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' },
  ];
  
  constructor(private _authenticationService: AuthenticationService) {
  }
}
