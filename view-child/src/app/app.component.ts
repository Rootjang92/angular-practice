import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  template: `
    <h3>Parent</h3>
    <button type="button" (click)="toggle()">Toggle Child</button>
    <button type="button" (click)="changeText()">Change Child's text</button>
    <app-child></app-child>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  @ViewChild(ChildComponent) myChild: ChildComponent;

  toggle() {
    this.myChild.isShow = !this.myChild.isShow;
  }

  changeText() {
    this.myChild.changeText('Hello');
  }
}
