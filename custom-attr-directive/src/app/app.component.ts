import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <h1>Attribute Directive</h1>

    <h4>텍스트의 색깔을 선택하세요.</h4>
    <div>
      <input type="radio" name="colors" (click)="color='red'">red
      <input type="radio" name="colors" (click)="color='blue'">blue
      <input type="radio" name="colors" (click)="color='green'">green
    </div>

    <p [textColor]="color" defaultColor="violet">Text Color</p>
  `,
})
export class AppComponent {
  color: string;
}

