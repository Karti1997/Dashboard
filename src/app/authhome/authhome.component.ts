import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authhome',
  templateUrl: './authhome.component.html',
  styleUrls: ['./authhome.component.scss']
})
export class AuthhomeComponent implements OnInit {
  month=["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  data=[ {
    name: 'Mathematics',
    data: [70, 69, 95, 145, 182, 215, 252,265, 233, 183, 139, 96]
 },
 {
    name: 'ComputerApplications',
    data: [20, 80, 57, 113, 170, 220, 248,241, 201, 141, 86, 25]
 },
 {
    name: 'Engineering',
    data: [90, 60, 35, 84, 135, 170, 186, 179, 143, 90, 39, 10]
 },
 {
    name: 'FashionDesign',
    data: [39, 42, 57, 85, 119, 152, 170, 166, 142, 103, 66, 48]
 },
 {
  name: 'Polytechnic',
  data: [39, 42, 57, 85, 119, 152, 170, 166, 142, 103, 66, 48]
}];
scholorshipdata=[{
  name: 'Lending ability',
  data: [
      ['Active accounts', 976],
      ['Form Distributed', 156],
      ['Applicants', 40],
      ['Acceptance', 20],
      ['Rejections', 20]
  ]
}]
Bookflowdata=[{
  name: 'Monthly book flow',
  data: [
      ['Back volumes', 976],
      ['Main Library', 156],
      ['Department Library', 40]
  ]
}]
  constructor() { }

  ngOnInit() {
  }

}
