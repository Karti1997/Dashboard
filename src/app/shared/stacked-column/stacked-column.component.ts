import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-stacked-column',
  templateUrl: './stacked-column.component.html'
  //styleUrls: ['./doughnut.component.scss']
})
export class StackedColumnComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle:string;
  @Input() categories: string[];
  @Input() yaxis:string;
  @Input() series:[];
  Highcharts = Highcharts;
  chartOptions = {};
  constructor() { }

  ngOnInit() {
    console.log(this.yaxis,this.series);
    this.chartOptions =  {
        chart: {
            type: 'column'
        },
        title: {
            text: this.title
        },
        subtitle: {
            text: this.subtitle
        },
        xAxis: {
            categories: this.categories,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: this.yaxis,
            },
            stackLabels: {
              enabled: true,
              style: {
                  fontWeight: 'bold',
                  color: ( // theme
                      Highcharts.defaultOptions.title.style &&
                      Highcharts.defaultOptions.title.style.color
                  ) || 'gray'
              }
          }
        },
        tooltip: {
            split: true,
            valueSuffix: 'members'
        },
        legend: {
          enabled:true
        },
        credits: {
          enabled: false
        },
        exporting: {
          enabled: true
        },
        plotOptions: {
          column: {
              stacking: 'normal',
              pointPadding: 0.1,
              borderWidth: 0,
              dataLabels: {
                  enabled: false
              }
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
