import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-dynamic-line',
  templateUrl: './dynamic-line.component.html',
})
export class DynamiclineComponent implements OnInit {

  @Input() title: string;

  Highcharts = Highcharts;
  chartOptions = {};
  constructor() { }

  ngOnInit() {
    this.chartOptions =  {
        chart: {
            type: 'spline',
            //type: 'column',
            //animation: Highcharts, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function () {
    
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = Math.random()*5;
                        series.addPoint([x, y], true, true);
                    }, 10000);
                }
            }
        },
    
        time: {
            useUTC: false
        },
    
        title: {
            text: this.title
        },
        plotOptions: {
            spline: {
                dataLabels: {
                    pointFormat: '{point.y:.0f}',
                    enabled: true
                }
            }
        },
        accessibility: {
            announceNewData: {
                enabled: true,
                minAnnounceInterval: 15000,
                announcementFormatter: function (allSeries, newSeries, newPoint) {
                    if (newPoint) {
                        return 'New point added. Value: ' + newPoint.y;
                    }
                    return false;
                }
            }
        },
    
        xAxis: {
            title: {
                text: 'Time'
            },
            type: 'datetime',
            tickPixelInterval: 150
        },
        color:['#606060'],
        yAxis: {
            title: {
                text: 'Students attended'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#606060'
            }]
        },
    
        tooltip: {
            headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '<p>Time: </p>{point.x:%Y-%m-%d %H:%M:%S}<br/><p>Students: </p>{point.y:.0f}'
        },
    
        legend: {
            enabled: false
        },
    
        exporting: {
            enabled: false
        },
    
        series: [{
            name: this.title,
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;
    
                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 5000,
                        y: Math.random()*5
                    });
                }
                return data;
            }())
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
