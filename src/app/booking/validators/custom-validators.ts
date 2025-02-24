import { AbstractControl } from "@angular/forms";

export class CustomValidators {
    static ValidateName(control: AbstractControl){
         const value = control.value as string;
         if(value.includes('test')){
             return { invalidName: true };
         }
         return null;
    }
    static SpecialCharacterValidation(char: string){
        return (control: AbstractControl) => {
          const value = control.value as string;
          if(value.includes(char)){
            return {
                invalidSpecialChar: true
            };
        }
        else return null;
        };
    }
    static ValidateCheckInOut(control: AbstractControl){
        const checkin: any = new Date(control.get('checkinDate')?.value);
        const checkOut: any = new Date(control.get('checkoutDate')?.value);
        const diffTime = checkOut- checkin;
        const diffDays = Math.ceil(diffTime / (1000*60*60*24));
        console.log(diffDays);
        console.log(Boolean(checkOut < checkin));
        console.log(diffTime);
        if (diffDays <= 0) {
            control.get('checkoutDate')?.setErrors({
                invalidDate: true
            });
          return {
            invalidDate: true,
          };
        } else return null;
    }
}
