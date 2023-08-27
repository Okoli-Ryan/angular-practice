import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CenterLayoutComponent } from 'src/app/layouts/center-layout/center-layout.component';
import { Multiple } from './pipes/multiple.pipe';
import { CalculateDateDifference } from './utils/CalculateDateDifference';
import { validateDay, validateDayInMonth, validateMonth, validateFutureDate } from './utils/date-validator.service';
import { AgeCalculatorErrorMessagePipe } from './pipes/errorMessagePipe';

@Component({
  standalone: true,
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.scss'],
  imports: [CenterLayoutComponent, ReactiveFormsModule, CommonModule, Multiple, AgeCalculatorErrorMessagePipe]
})
export class AgeCalculatorComponent {

  ValidateForm!: FormGroup;
  timeDifference = { days: 0, months: 0, years: 0 }

  constructor(private fb: FormBuilder) {
    this.ValidateForm = this.fb.group({
      day: [null, [validateDay.bind(this), validateDayInMonth.bind(this), validateFutureDate.bind(this)]],
      month: [null, [validateMonth.bind(this), validateDayInMonth.bind(this), validateFutureDate.bind(this)]],
      year: [null, [validateFutureDate.bind(this)]],
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
    console.log(this.ValidateForm)
    if (this.ValidateForm.valid)
      this.timeDifference = CalculateDateDifference(this.ValidateForm.value)
  }

}
