import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CenterLayoutComponent } from 'src/app/layouts/center-layout/center-layout.component';
import { DateValidatorService } from './utils/date-validator.service';
import { Multiple } from './utils/multiple.pipe';

@Component({
  standalone: true,
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.scss'],
  imports: [CenterLayoutComponent, ReactiveFormsModule, CommonModule, Multiple]
})
export class AgeCalculatorComponent {

  ValidateForm!: FormGroup;
  timeDifference = { days: 0, months: 0, years: 0 }

  constructor(private fb: FormBuilder, private dateValidator: DateValidatorService) {
    this.ValidateForm = this.fb.group({
      day: [null, [this.dateValidator.validateDay.bind(this), this.dateValidator.validateDayInMonth.bind(this)]],
      month: [null, [this.dateValidator.validateMonth.bind(this), this.dateValidator.validateDayInMonth.bind(this)]],
      year: [null, [this.dateValidator.validateYear.bind(this)]],
    })
  }

  showResult = false


  dateValues = [{
    label: 'day',
    placeholder: 'DD'
  },
  {
    label: 'month',
    placeholder: 'MM'
  },
  {
    label: 'year',
    placeholder: 'YY'
  }]


  // Calculate the time difference
  onSubmit() {
    this.timeDifference = CalculateDateDifference(this.ValidateForm.value)
  }

}

function CalculateDateDifference(targetDate: { day: number, month: number, year: number }) {

  try {

    const currentDate = new Date();
    const target = new Date(targetDate.year, targetDate.month - 1, targetDate.day); // Month is 0-based

    const timeDifference = currentDate.getTime() - target.getTime();
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

    const currentYear = currentDate.getFullYear();
    const targetYear = target.getFullYear();

    const years = currentYear - targetYear;
    const months = (currentDate.getMonth() + 1) - targetDate.month; // Month is 0-based

    const remainingDaysInCurrentMonth = daysDifference - (years * 365 + months * 30);

    return {
      years,
      months,
      days: Math.floor(remainingDaysInCurrentMonth)
    };
  } catch (e) {
    console.log(e)
    return { years: 0, months: 0, days: 0 };
  }
}

