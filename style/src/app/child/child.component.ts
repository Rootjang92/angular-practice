import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <h3>Component Style: child</h3>
  <button class="btn-primary">Button</button>
  `,
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ChildComponent  {

}
