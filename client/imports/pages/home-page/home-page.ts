// App
import { Component } from "@angular/core";

@Component({
  selector: 'home-page',
  template: `
    <section>
      <content-header 
        [section]="section" 
        [title]="title"></content-header>
    </section>
  `
})
export class HomePageComponent {

  constructor() {

  }
}
