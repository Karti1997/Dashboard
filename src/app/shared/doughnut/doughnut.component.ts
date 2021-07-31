import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent implements OnInit {

  @Input() title: string;
  @Input() yaxis: string;
  @Input() subtitle: string;
  @Input() series:[];

  Highcharts = Highcharts;
  chartOptions = {};
  constructor() { }
  
  ngOnInit() {
    this.chartOptions =  {
      chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    title: {
        text: this.title
    },
    plotOptions: {
        pie: {
            innerSize: 80,
            depth: 45,
            dataLabels: {
                      enabled: true
                  }
          },
    },
    series: [{
        name: this.yaxis,
        data: this.series,
        
    }]
  };

    HC_exporting(Highcharts);

    setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300);
  }

}
