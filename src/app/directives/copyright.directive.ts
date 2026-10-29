import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCopyright]'
})
export class CopyrightDirective {

  constructor(e1: ElementRef) {
    const currentYear = new Date().getFullYear();
    const targetE1: HTMLElement = e1.nativeElement;
    targetE1.classList.add('copyright');
    targetE1.textContent = `Copyright ©${currentYear} All Rights Reserved`;
  }
}
