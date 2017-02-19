import { Component } from '@angular/core';

@Component({
  selector: 'kc-config-list',
  template: `
    <div>
      <ngx-datatable
        [rows]="rows"
        [columns]="columns">
      </ngx-datatable>
    </div>
  `,
})
export class ConfigListComponent {
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
}
