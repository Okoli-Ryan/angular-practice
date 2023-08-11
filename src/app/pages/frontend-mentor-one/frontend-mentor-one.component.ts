import { Component } from '@angular/core';
import { CenterLayoutComponent } from 'src/app/layouts/center-layout/center-layout.component';
import { ResultSection } from './components/result-section/result-section.component';
import { SummarySection } from './components/summary-section/summary-section.component';

@Component({
  standalone: true,
  selector: 'app-frontend-mentor-one',
  templateUrl: './frontend-mentor-one.component.html',
  styleUrls: ['./frontend-mentor-one.component.scss'],
  imports: [CenterLayoutComponent, ResultSection, SummarySection]
})
export class FrontendMentorOneComponent {

}
