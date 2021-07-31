import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import funnel from 'highcharts/modules/funnel';
@Component({
  selector: 'app-widget-funnel',
  templateUrl: './funnel.component.html'
  //styleUrls: ['./doughnut.component.scss']
})
export class FunnelComponent implements OnInit {

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
            type: 'funnel'
        },
        title: {
            text: this.title
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    softConnector: true
                },
                center: ['40%', '50%'],
                width: '80%'
            }
            /*series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    softConnector: true
                },
                center: ['40%', '50%'],
                neckWidth: '30%',
                neckHeight: '25%',
                width: '80%'
            }*/
        },
        legend: {
            enabled: false
        },
        series:this.series,
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    plotOptions: {
                        series: {
                            dataLabels: {
                                inside: true
                            },
                            center: ['50%', '50%'],
                            width: '100%'
                        }
                    }
                }
            }]
        }
  };

  funnel(Highcharts);
    HC_exporting(Highcharts);

    setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300);
  }

}
