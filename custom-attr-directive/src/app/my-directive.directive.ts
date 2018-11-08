import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {
  @Input() inputValue: string;
  @Input() staticValue: string;

  constructor() { }

  @HostListener('click') handleClick() {
    console.log('inputValue: ' + this.inputValue);
    console.log('staticValue: ' + this.staticValue);
  }
}
