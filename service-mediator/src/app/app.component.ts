import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-sibling1></app-sibling1>
    <app-sibling2></app-sibling2>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'service-mediator';
}
