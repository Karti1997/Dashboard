import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

constructor() { }
Month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
data= [{name: 'members',data: [1450, 1370, 1600, 1700, 1460, 1330, 1450, 1370, 1600, 1700, 1460,1500]}];
colors=[ '#0080ff'];
Time=['8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM'];
data1=[{name: 'members',data: [45, 37, 60, 70, 46, 33, 45, 37, 60, 70, 46]}];
colors1=[ '#ff33ff'];
Members=['students','Faculties','Non-Teaching staffs'];
data2=[{name: 'members',data: [30,15,7]}];
colors2=[ '#ff33ff','#0080ff','#ff3399'];
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
hour:string;
ngOnInit() {
this.hour="visitors since "+new Date().getHours()+":00";
 }
}
