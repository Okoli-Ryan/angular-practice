import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Pipe({ name: 'errorMessage' ,standalone: true, pure: true })
export class AgeCalculatorErrorMessagePipe implements PipeTransform {
    transform(fb: FormGroup, name: string): any {
    const errorObject = fb.controls[name].errors || {}
    const errorArray = Object.values(errorObject)
    console.log(errorObject)
        return errorArray?.[0] || ''
    }
}