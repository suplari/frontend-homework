import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';
import { SuplariCurrencyPipe } from './currency.pipe';

@Directive({ selector: '[suplariCurrencyFormatter]' })
export class SuplariCurrencyFormatterDirective implements OnInit {

  private el: HTMLInputElement;

  constructor(
    private elementRef: ElementRef,
    private currencyPipe: SuplariCurrencyPipe
  ) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
      console.log('currencyFormatter - ngOnInit');
      this.el.value = this.currencyPipe.transform(this.el.value);
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value) {
      console.log('CurrencyFormatter - onFocus');
    // this.el.value = this.currencyPipe.parse(value); // opossite of transform
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value) {
      console.log('CurrencyFormatter - onBlur');
    this.el.value = this.currencyPipe.transform(value);
  }

}