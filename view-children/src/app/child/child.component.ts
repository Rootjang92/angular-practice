import { Component, OnInit, Input } from '@angular/core';
import { Checkbox } from '../app.component';

@Component({
  selector: 'app-child',
  template: `
    <input type="checkbox" [id]="checkbox.id" [checked]="checkbox.checked">
    <label [for]="checkbox.id">{{ checkbox.label }}</label>
  `,
  styles: []
})
export class ChildComponent {
  @Input() checkbox: Checkbox;

}
