import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ResizeEvent } from 'angular-resizable-element';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {};
  constructor() { }

  public style: object = {} ;
  public Style:string;
  items=[];
  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 50;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      position: 'fixed',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }
  add(){
    this.items.push(6);
  }
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
        text: 'Count of Total Books in Each Category'
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
        name: 'Book count',
        data: [
            ['IssuedBooks', 3,],
            ['BooksonDue', 2],
            ['BookscanTake', 2],
        ],
        
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
