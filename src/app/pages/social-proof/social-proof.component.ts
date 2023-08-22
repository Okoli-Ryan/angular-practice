import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RATINGS, TESTIMONIALS } from './social-proof.data';

@Component({
  standalone: true,
  selector: 'app-social-proof',
  templateUrl: './social-proof.component.html',
  styleUrls: ['./social-proof.component.scss'],
  imports: [CommonModule]
})
export class SocialProofComponent {

  ratings = RATINGS
  testimonials = TESTIMONIALS
}
