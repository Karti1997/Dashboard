import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  @Input() title:string;
  @Input() subtitle:string;
  @Input() categories:[];
  @Input() yaxis:string;
  @Input() series:[];
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit() {
    this.chartOptions =  {
      chart: {
          type: 'area'
      },
      title: {
          text: this.title
      },
      subtitle: {
          text: this.subtitle
      },
      xAxis: {
        categories: this.categories
      },
      yAxis: {
        title: {
            text: this.yaxis
        },
        categories: ['0','1000', '2000', '3000', '4000', '5000']
      },
      tooltip: {
          split: true,
          valueSuffix: ' books'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true
      },
      series: this.series
  };

    HC_exporting(Highcharts);

    setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300);
  }

}
