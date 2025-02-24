import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailVaidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailVaidatorDirective, multi: true }]
})
export class EmailVaidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const email: string = control.value;
    // if (email && email.indexOf('@') === -1) {
    //   return { email: 'Invalid email' };
    // }
    if(email?.includes('test')){
        return {
          invalidEmail: true
        }
    }
    return null;
  }

}
