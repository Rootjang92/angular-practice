import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input type="text" [(ngModel)]="value">
    <p>{{ value | reverse }}</p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  value: string;
}
