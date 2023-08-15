import { Component, Input } from '@angular/core';
import { BackButtonComponent } from 'src/app/shared/back-button/back-button.component';

@Component({
  standalone: true,
  selector: 'center-layout',
  templateUrl: './center-layout.component.html',
  styleUrls: ['./center-layout.component.scss'],
  imports: [BackButtonComponent]
})
export class CenterLayoutComponent {

  @Input() bg = 'transparent';
}
