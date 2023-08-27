import { FormControl, AbstractControl } from '@angular/forms';


export const validateDay = (control: AbstractControl) => {
  const day = control.value
  if (!day) {
    return { error: 'Day is required' }
  }
  if (day < 1 || day > 31) {
    return { error: 'Day is invalid' };
  }
  return null;
}

export const validateMonth = (control: AbstractControl) => {
  const month = control.value
  if (!month) {
    return { error: 'Month is required' }
  }
  if (month < 1 || month > 12) {
    return { error: 'Month is invalid' };
  }
  return null;
}

/**
 * Ensures the day date selected is valid for the selected month
 */
export const validateDayInMonth = (control: FormControl) => {
  const day = control.parent?.get('day')
  const month = control.parent?.get('month')
  const year = control.parent?.get('year')

  if (!day?.value || !month?.value || !year?.value) return null

  const daysInMonth = new Date(year.value, month.value, 0).getDate();
  if (day.value > daysInMonth) {
    month.setErrors({ error: 'Invalid month' });
    return { error: 'Invalid day' };
  }

  return null
}

/**
 * Checks if the day/month selected is in the future 
 */
export const validateFutureDate = (control: FormControl) => {
  const day = control.parent?.get('day')
  const month = control.parent?.get('month')
  const year = control.parent?.get('year')

  if (!day?.value || !month?.value || !year?.value) return null

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();


  console.log(year.value > currentYear)
  if (year.value > currentYear) {
    year.setErrors({futureYear: 'Future year selected'})
    return {futureYear: 'Future year selected'}
  }

  // Month is in the future of the current year
  if (year.value === currentYear && month.value > currentMonth) {
    console.log(month)
    const error = { futureMonth: 'Future month selected' };
    month.setErrors(error);
    return null
  }

  // Day is in the future of the current month and year
  if (year.value === currentYear && month.value === currentMonth && day.value > currentDay) {
    const error = { futureDay: 'Future Day Selected' };
    day.setErrors(error);
    return null
  }

  year.setErrors(null)
  month.setErrors(null)
  day.setErrors(null)
  return null
}

