import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[textBlue]'
})
export class TextBlueDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // el.nativeElement.style.color = 'blue';
    renderer.setStyle(el.nativeElement, 'color', 'blue');
  }

  @HostListener('mousesenter') handleMouseEnter() {
    this.textColor('blue');
  }

  @HostListener('mouseleave') handleMouseLeave() {
    this.textColor(null);
  }

  private textColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

}
