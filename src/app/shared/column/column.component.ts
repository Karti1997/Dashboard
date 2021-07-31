import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import {Data} from './columndata';

@Component({
  selector: 'app-widget-column',
  templateUrl: './column.component.html'
  //styleUrls: ['./doughnut.component.scss']
})
export class ColumnComponent implements OnInit {

  @Input() title: string;
  @Input() categories: string[];
  @Input() yaxis:string;
  @Input() series:[];
  @Input() colors:[];
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
            text: this.title,
        },
        xAxis: {
            categories: this.categories,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: this.yaxis,
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.0f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        legend:{
            enabled:false
        },
        colors: this.colors,
        plotOptions: {
            series: {
                colorByPoint: true
            },
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },
        series:this.series
  };

    HC_exporting(Highcharts);

    setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300);
  }

}
