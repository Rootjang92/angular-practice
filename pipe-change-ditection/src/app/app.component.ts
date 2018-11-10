import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-todos></app-todos>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'pipe-change-ditection';
}
