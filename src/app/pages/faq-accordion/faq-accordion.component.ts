import { CommonModule } from '@angular/common';
import { ACCORDION_DATA } from './shared/faq-accordion.data';
import { Component } from '@angular/core';
import { CenterLayoutComponent } from 'src/app/layouts/center-layout/center-layout.component';

@Component({
  standalone: true,
  selector: 'app-faq-accordion',
  templateUrl: './faq-accordion.component.html',
  styleUrls: ['./faq-accordion.component.scss'],
  imports: [CenterLayoutComponent, CommonModule]
})
export class FaqAccordionComponent {

  ACCORDION_DATA = [...ACCORDION_DATA]
  selectedItem = -1

  //Reset accordion if open Accordion item is reselected
  handleSelect(itemIndex: number) {
    if (itemIndex !== this.selectedItem)
      this.selectedItem = itemIndex;
    else
      this.selectedItem = -1
  }

}
