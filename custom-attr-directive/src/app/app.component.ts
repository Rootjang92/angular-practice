import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <p appTextColor [color]="color">textBlue directive</p> -->
    <!-- <button appMyDirective [inputValue]="msg" staticValue="hi">Click me</button> -->
    <h4>텍스트의 컬러를 선택하세요</h4>
    <div>
      <input type="radio" name="colors" (click)="color='red'">Red
      <input type="radio" name="colors" (click)="color='blue'">blue
      <input type="radio" name="colors" (click)="color='green'">green
    </div>

    <p [appTextColor]="color" defaultColor="violet">Text Color</p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  color = 'red';
  msg = 'button Click';
}
