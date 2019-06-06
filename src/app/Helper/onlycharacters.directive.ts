import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[Onlycharacters]'
})
export class OnlycharactersDirective {

  constructor(private el: ElementRef) { }

  @Input() Onlycharacters: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    //console.log("her")
    let e = <KeyboardEvent> event;
    if (this.Onlycharacters) {
      // if(e.keyCode == 86 && (e.ctrlKey || e.metaKey)){
      //   //console.log("num",this.OnlyNumber)
      // }
      if ([46, 8, 9, 27, 13, 32].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+C
        (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+V
        (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+X
        (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
        (e.keyCode === 109) ||   (e.keyCode === 189) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
          // let it happen, don't do anything
          return;
        }
        // Ensure that it is a number and stop the keypress
        if  (e.keyCode < 65 || e.keyCode > 90)  {
            e.preventDefault();
        }
      }
  }
  // @HostListener('focusout', ['$event.target'])
  // onFocusout(target: any) {
  //     //console.log("Focus out called from HostListener",target.value);
  //     // target.value =''
  //     // target.type = 'text';
  // }

}
