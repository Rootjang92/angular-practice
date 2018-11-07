import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>Component Style: parent</h3>
    <button class="btn-primary">Button</button>
    <div class="theme-red">
      <app-child class="active"></app-child>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {}

