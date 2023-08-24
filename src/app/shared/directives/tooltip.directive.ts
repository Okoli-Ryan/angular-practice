import { Directive, Renderer2, ElementRef, HostListener, ViewContainerRef, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[tooltip]',
  
})
export class TooltipDirective {

  tooltip!: HTMLElement
  @Input('tooltip') tooltipTitle: string = ''

  constructor(private renderer: Renderer2, private el: ElementRef<HTMLElement>, private viewContainer: ViewContainerRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.createToolTip()
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeTooltip()
  }

  createToolTip() {

    // create tooltip html element
    this.tooltip = this.renderer.createElement('span')

    //Create Text and append it to created tooltip element
    this.renderer.appendChild(this.tooltip, this.renderer.createText(this.tooltipTitle))

    //Append tooltip to document body
    this.renderer.appendChild(this.el.nativeElement, this.tooltip)

    //Add needed classes to the tooltip
    // this.renderer.setStyle(this.tooltip, 'top', '-20px')
    this.renderer.addClass(this.tooltip, 'ng-tooltip')
    this.renderer.addClass(this.tooltip, 'ng-tooltip-top')
    this.renderer.addClass(this.tooltip, 'ng-tooltip-show')

    //Place tooltip above view container
    const clientHeight = this.viewContainer.element.nativeElement?.clientHeight
    this.renderer.setStyle(this.tooltip, 'top', `-${(clientHeight/2) + 15}px`)


    //Ensure view container has a set position ('not static'), and set to relative if so
    const computedStyle = window.getComputedStyle(this.viewContainer.element.nativeElement)
    if(computedStyle.position === 'static') this.renderer.setStyle(this.viewContainer.element.nativeElement, 'position', 'relative')
  }

  removeTooltip() {
    this.renderer.removeChild(this.el.nativeElement, this.tooltip)
  }

}
