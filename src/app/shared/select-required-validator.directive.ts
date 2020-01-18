import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appSelectValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: SelectRequiredValidatorDirective,
        multi: true
    }]
})
export class SelectRequiredValidatorDirective implements Validator {
    @Input('appSelectValidator') defaultValue: string;
    validate(control: AbstractControl): { [key: string]: any } | null {
        return control.value === this.defaultValue ? { 'defaultSelected': true } : null;
    }
}
