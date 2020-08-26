import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {
  @Input() gaugeValue: number;
  gaugeAppendText = '%';
  gaugeType = 'arch';
  thresholdConfig = {
    0: {color: 'red'},
    80: {color: 'yellow'},
    90: {color: 'blue'},
    110: {color: 'lightgreen'},
    120: {color: 'green'},
  };
  constructor() { }

  ngOnInit(): void {
  }

}
