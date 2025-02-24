import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective  implements OnInit {

  @Input() color: string = 'red';
  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(this.element);
  }

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.color);
    // this.element.nativeElement.style.backgroundColor = this.color;
  }

}
