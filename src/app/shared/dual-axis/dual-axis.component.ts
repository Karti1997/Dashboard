import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-dualaxis',
  templateUrl: './dual-axis.component.html'
})
export class DualaxisComponent implements OnInit {

  @Input() title: string;
  @Input() categories: string[];
  @Input() yaxis: string;
  @Input() series:[];
  Highcharts = Highcharts;
  chartOptions = {};
  constructor() { }

  ngOnInit() {
    this.chartOptions =  {
      chart: {
        type: 'spline'
    },
    title: {
        text: this.title
    },
    xAxis: {
        categories:this.categories
    },
    yAxis: {
        title: {
            text: this.yaxis
        }
    },
    tooltip: {
      crosshairs: true,
      shared: true
    },
    plotOptions: {
        spline: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        }
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
