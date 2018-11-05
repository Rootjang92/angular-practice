import { Component, ViewChildren, QueryList } from '@angular/core';
import { ChildComponent } from './child/child.component';

export interface Checkbox {
  id: number;
  label: string;
  checked: boolean;
}

@Component({
  selector: 'app-root',
  template: `
    <h3>Parent</h3>
    <button type="button" (click)="toggle()">Toggle Child</button>
    <div *ngFor="let checkbox of checkboxs"><app-child [checkbox]="checkbox"></app-child></div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  checkboxs: Checkbox[] = [
    {id: 1, label: 'HTML', checked: true},
    {id: 2, label: 'CSS', checked: false},
    {id: 3, label: 'JS', checked: true}
  ];
  active = false;

  @ViewChildren(ChildComponent)
  myChildren: QueryList<ChildComponent>;

  toggle() {
    this.active = !this.active;
    this.myChildren.forEach(child => child.checkbox.checked = this.active);
  }
}


