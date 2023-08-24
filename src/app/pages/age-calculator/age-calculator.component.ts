import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CenterLayoutComponent } from 'src/app/layouts/center-layout/center-layout.component';

@Component({
  standalone: true,
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.scss'],
  imports: [CenterLayoutComponent, ReactiveFormsModule, CommonModule]
})
export class AgeCalculatorComponent {

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
}
