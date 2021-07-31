import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import * as HighchartsMore from 'highcharts-more';
@Component({
  selector: 'app-widget-tilemap',
  templateUrl: './tilemap.component.html'
  //styleUrls: ['./doughnut.component.scss']
})
export class TilemapComponent implements OnInit {

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
        colors: ['#FFD700', '#C0C0C0', '#CD7F32'],
    chart: {
        type: 'column',
        inverted: true,
        polar: true
    },
    title: {
        text: 'Books availability'
    },
    tooltip: {
        outside: true
    },
    pane: {
        size: '85%',
        innerSize: '20%',
        endAngle: 270
    },
    xAxis: {
        tickInterval: 1,
        labels: {
            align: 'right',
            useHTML: true,
            allowOverlap: true,
            step: 1,
            y: 3,
            style: {
                fontSize: '13px'
            }
        },
        lineWidth: 0,
        categories: [
            'CA <span class="f16"><span id="flag" class="flag no">' +
            '</span></span>',
            'Engineering <span class="f16"><span id="flag" class="flag us">' +
            '</span></span>',
            'Maths <span class="f16"><span id="flag" class="flag de">' +
            '</span></span>',
            'FD <span class="f16"><span id="flag" class="flag ca">' +
            '</span></span>',
            'Polytechnic <span class="f16"><span id="flag" class="flag at">' +
            '</span></span>'
        ]
    },
    yAxis: {
        crosshair: {
            enabled: true,
            color: '#333'
        },
        lineWidth: 0,
        tickInterval: 25,
        reversedStacks: false,
        endOnTick: true,
        showLastLabel: true
    },

    plotOptions: {
        column: {
            stacking: 'normal',
            borderWidth: 0,
            pointPadding: 0,
            groupPadding: 0.15
        }
    },
    series: [{
        name: 'Main',
        data: [132, 105, 92, 73, 64]
    }, {
        name: 'Backvolume',
        data: [125, 110, 86, 64, 81]
    }, {
        name: 'Issued',
        data: [111, 90, 60, 62, 87]
    }]
  };
  HighchartsMore(Highcharts);
    HC_exporting(Highcharts);

    setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300);
  }

}
