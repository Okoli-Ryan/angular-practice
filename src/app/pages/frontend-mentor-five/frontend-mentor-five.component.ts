import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CenterLayoutComponent } from 'src/app/layouts/center-layout/center-layout.component';

@Component({
  standalone: true,
  selector: 'app-frontend-mentor-five',
  templateUrl: './frontend-mentor-five.component.html',
  styleUrls: ['./frontend-mentor-five.component.scss'],
  imports: [CenterLayoutComponent, CommonModule]
})
export class FrontendMentorFiveComponent {

  statistics = [
    {
      title: '10k+',
      subTitle: 'companies'
    },
    {
      title: '314',
      subTitle: 'templates'
    },
    {
      title: '12M+',
      subTitle: 'queries'
    },
  ]

}
