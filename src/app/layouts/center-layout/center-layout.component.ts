import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'center-layout',
  templateUrl: './center-layout.component.html',
  styleUrls: ['./center-layout.component.scss'],
})
export class CenterLayoutComponent {

  @Input() bg = 'transparent';
}
