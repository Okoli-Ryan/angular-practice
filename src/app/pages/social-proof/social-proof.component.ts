import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CenterLayoutComponent } from 'src/app/layouts/center-layout/center-layout.component';

@Component({
  standalone: true,
  selector: 'app-social-proof',
  templateUrl: './social-proof.component.html',
  styleUrls: ['./social-proof.component.scss'],
  imports: [CommonModule, CenterLayoutComponent]
})
export class SocialProofComponent {

}
