import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  private initialColor = '#000000';
  private defaultColor = '#009688';
  private defaultHeight = 200;
  private borderColor = '#009688';


  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }

  // tslint:disable-next-line:typedef
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor );
  }

  // tslint:disable-next-line:typedef
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.defaultColor);
  }

  // tslint:disable-next-line:typedef
  private setBorder( color: string) {
    this.el.nativeElement.style.border = 'solid 4px ' + color;
  }

  // tslint:disable-next-line:typedef
  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }

}
