import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {

  @HostListener('click', ['$event']) elementClick(e) {
    // event 객체
    alert(e.srcElement.innerHTML);
  }
  constructor(elementRef: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elementRef.nativeElement, 'color', 'darked');
  }
}
