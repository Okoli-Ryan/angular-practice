import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CenterLayoutComponent } from 'src/app/layouts/center-layout/center-layout.component';
import { DateValidatorService } from './utils/date-validator.service';
import { Multiple } from './pipes/multiple.pipe';
import { CalculateDateDifference } from './utils/CalculateDateDifference';

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
