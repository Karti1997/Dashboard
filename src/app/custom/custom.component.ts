import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ChartDialogComponent } from '../chartdialog/chartdialog.component';
import {Feedback} from '../shared/feedback';
@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  chartdetail:Feedback =new Feedback();
  colors=[ '#ff33ff','#0080ff','#ff3399'];
  data3=[{
    name: 'Polytechnic',
    data: [10, 10, 20, 19, 25,6 ,7, 19,43,36,7,44]
  }, {
    name: 'Engineering',
    data: [18, 38, 40, 19, 23,7, 17, 60,34,24,22,27]
  }, {
    name: 'Computer Application',
    data: [25, 8, 30, 19, 13,8, 37, 35,43,54,24,15]
  }, {
    name: 'Fashion Design',
    data: [28, 18, 20, 19,9, 16, 27, 20,21,45,34,56]
  }, {
    name: 'Mathematics',
    data: [20, 29, 10, 23,10, 26, 25, 30,25,46,53,21]
  }];
  data4=[{
    name: 'Students',
    data: [10, 10, 20, 19, 25,6 ,7, 19,43,36,7,44]
  }, {
    name: 'Faculty',
    data: [18, 38, 40, 19, 23,7, 17, 60,34,24,22,27]
  }, {
    name: 'Non-Teaching Staffs',
    data: [25, 8, 30, 19, 13,8, 37, 35,43,54,24,15]
  }]

  ngOnInit() {
  }
    
  addchart(): void {
    console.log("DialogBox opened");
      const dialogRef = this.dialog.open(ChartDialogComponent, {
        width: '400px',
        data: {title:"Customize your chart"}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        
        this.chartdetail=result.data;
        console.log(this.chartdetail.charttype);
      });
    }
}
