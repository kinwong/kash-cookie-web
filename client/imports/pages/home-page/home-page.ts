// App
@import "imports/app/app";@Component({
  template: `
    <section>
      <content-header 
        [section]="section" 
        [title]="title"></content-header>
    </section>
  `,
})
export class HomePageComponent {

  constructor() {

  }
}
