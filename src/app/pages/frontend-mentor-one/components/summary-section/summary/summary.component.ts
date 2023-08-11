import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-summary',
  template: `
    <div class="summary" [style]="{backgroundColor}">
      <div class="summary__field">
        <img [src]="src" />
        <h5 [style]="{color}">{{field}}</h5>
      </div>
      <h5>{{score}}<span>&nbsp; / 100</span></h5>
    </div>
  `,
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  @Input() score = 0
  @Input() color = '#00000'
  @Input() field = ''
  @Input() src = ''
  backgroundColor = ''

  ngOnInit(): void {
    //Lighten the background
    this.backgroundColor = this.color + '33'
  }
}
