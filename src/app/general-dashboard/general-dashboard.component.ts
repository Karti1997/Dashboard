import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-dashboard',
  templateUrl: './general-dashboard.component.html',
  styleUrls: ['./general-dashboard.component.scss']
})
export class GeneralDashboardComponent implements OnInit {

  constructor() { }
  facilitydata=[{
    name: 'Facility',
    colorByPoint: true,
    data: [{
        name: 'OPAC',
        y: 61.41,
        sliced: true,
        selected: true
    }, {
        name: 'StudyHall',
        y: 11.84
    }, {
        name: 'ReadingRoom',
        y: 10.85
    }, {
        name: 'Browsing',
        y: 4.67
    }, {
        name: 'Meeting Forum',
        y: 4.18
    }, {
        name: 'Digital library',
        y: 1.64
    }]
}];
years=['1998-2002', '2002-2006', '2006-2010', '2010-2014', '2014-2018'];

data=[{
    name: 'Programming',
    data: [502, 809, 1402, 3634, 5268]
}, {
    name: 'Apptitude',
    data: [106, 111, 133, 767, 1766]
}, {
    name: 'Data Science',
    data: [163,  276, 408,  729, 628]
}, {
    name: 'Database Management',
    data: [18, 31, 156, 818, 1201]
}, {
    name: 'Literature',
    data: [2, 6, 13, 30, 46]
}]
  ngOnInit() {
  }

}
