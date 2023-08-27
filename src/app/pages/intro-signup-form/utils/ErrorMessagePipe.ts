import { Pipe, PipeTransform } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Pipe({ name: 'errorMessage', standalone: true, pure: false })
export class ErrorMessagePipe implements PipeTransform {
    transform(fb: FormGroup, fieldName: string) {
        const errorObject = fb.controls[fieldName]?.['errors']
        return getErrorMessage(errorObject)
    }
}

function getErrorMessage(errorObject: any) {
    if (!errorObject) {
        return '';
    }

    if (errorObject.minlength) {
        const { requiredLength } = errorObject.minlength;
        return `minimum length of ${requiredLength} required`;
    }

    if (errorObject.required) {
        return 'This field is required';
    }

    if (errorObject.email) {
        return 'Not a valid email';
    }

    return '';
}