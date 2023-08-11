import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'center-layout',
  template: `<div class='center-layout'><ng-content/></div>`,
  styleUrls: ['./center-layout.component.scss']
})
export class CenterLayoutComponent {

}
