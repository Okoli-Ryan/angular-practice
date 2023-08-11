import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SummaryComponent } from './summary/summary.component';

@Component({
  standalone: true,
  selector: 'app-summary-section',
  templateUrl: './summary-section.component.html',
  styleUrls: ['./summary-section.component.scss'],
  imports: [CommonModule, SummaryComponent]
})
export class SummarySection {

  summaryList = [
    { field: 'Reaction', score: 80, color: '#e27478', icon: 'assets/frontend-mentor-1/images/icon-reaction.svg' },
    { field: 'Memory', score: 92, color: '#ecc657', icon: 'assets/frontend-mentor-1/images/icon-memory.svg' },
    { field: 'Verbal', score: 61, color: '#42c6a4', icon: 'assets/frontend-mentor-1/images/icon-verbal.svg' },
    { field: 'Visual', score: 72, color: '#3f49af', icon: 'assets/frontend-mentor-1/images/icon-visual.svg' },
  ]
}
