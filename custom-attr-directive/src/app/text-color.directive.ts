import { Directive, ElementRef, Renderer2, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[textColor]'
})
export class TextColorDirective implements OnInit{
  @Input('textColor') color: string;
  @Input() defaultColor: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.textColor(this.defaultColor);
  }
  @HostListener('mouseenter') handleMouseEnter() {
    this.textColor(this.color);
  }

  @HostListener('mouseleave') handleMoustLeave() {
    this.textColor(this.defaultColor);
  }

  private textColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
