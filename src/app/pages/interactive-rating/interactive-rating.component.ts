import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CenterLayoutComponent } from 'src/app/layouts/center-layout/center-layout.component';

@Component({
  standalone: true,
  selector: 'app-interactive-rating',
  templateUrl: './interactive-rating.component.html',
  styleUrls: ['./interactive-rating.component.scss'],
  imports: [CenterLayoutComponent, CommonModule]
})
export class InteractiveRatingComponent {

  selectedRating: number = -1;
  isSubmitted: boolean = false;

  selectRating(rating: number) {
    this.selectedRating = rating
  }

  submit() {
    this.isSubmitted = true
  }
}
