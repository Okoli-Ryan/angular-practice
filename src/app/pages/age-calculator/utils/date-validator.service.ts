import { Injectable } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class DateValidatorService {

  constructor() { }

  validateDay = (control: AbstractControl) => {
    const day = control.value
    if (!day) {
      return { error: 'Day is required' }
    }
    if (day < 1 || day > 31) {
      return { error: 'Day is invalid' };
    }
    return null;
  }

  validateMonth = (control: AbstractControl) => {
    const month = control.value
    if (!month) {
      return { error: 'Month is required' }
    }
    if (month < 1 || month > 12) {
      return { error: 'Month is invalid' };
    }
    return null;
  }

  validateYear = (control: AbstractControl) => {
    const year = control.value
    const currentYear = new Date().getFullYear();

    if (!year) {
      return { error: 'Year is required' }
    }

    if (year > currentYear) {
      return { error: 'In the future' };
    }
    return null;
  }

  validateDayInMonth = (control: FormControl) => {
    const day = control.parent?.value?.day
    const year = control.parent?.value?.year
    const month = control.parent?.value?.month

    console.log(day, year, month)
    const daysInMonth = new Date(year, month, 0).getDate();
    if (day > daysInMonth) {
      const monthControl = control.parent?.controls as Record<string, AbstractControl>
      monthControl?.['month'].setErrors({ error: 'Invalid month' });
      return { error: 'Invalid day' };
    }

    return null
  }
}
