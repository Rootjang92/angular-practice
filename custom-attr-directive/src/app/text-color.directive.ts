import { Directive, Input, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective implements OnInit {
  @Input('appTextColor') color: string;
  @Input() defaultColor: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.textColor(this.defaultColor);
  }

  @HostListener('mouseenter') handleMouseEvent() {
    this.textColor(this.color);
  }

  @HostListener('mouseleave') handleMouseLeave() {
    this.textColor(this.defaultColor);
  }

  private textColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
