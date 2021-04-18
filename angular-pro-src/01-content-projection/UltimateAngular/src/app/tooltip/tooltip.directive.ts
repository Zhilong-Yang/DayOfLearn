import {Input, Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[tooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit {
  tooltipElement = document.createElement('div');
  visible = false;

  @Input()
  set tooltip(value: string) {
    this.tooltipElement.textContent = value;
  }

  hide(): void {
    this.tooltipElement.classList.remove('tooltip--active');
  }

  show(): void {
    this.tooltipElement.classList.add('tooltip--active');
  }

  constructor(
    private element: ElementRef
  ) {
  }

  ngOnInit(): void {
    this.tooltipElement.className = 'tooltip';
    this.element.nativeElement.appendChild(this.tooltipElement);
    this.element.nativeElement.classList.add('tooltip-container');
  }
}
