import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2 *appMyNgIf="condition">Hello {{name}}</h2>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  condition = true;
  name = 'Jang';
}
