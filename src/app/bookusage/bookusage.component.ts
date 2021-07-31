import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookusage',
  templateUrl: './bookusage.component.html',
  styleUrls: ['./bookusage.component.scss']
})
export class BookusageComponent implements OnInit {

  constructor() { }
  month=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  books=['Literature','DataScience','ArtificialIntelligence','Engineering','Mathematics','Computer Applications','General','Aptitude'];
  ebookdata=[{
    name: 'Printedbooks',
    data: [700, 609, 950, 450, 600, 815, 452, 365, 233, 483, 289, 396]
}, {
    name: 'E-Books',
    data: [319, 442, 537, 805, 419, 502, 170, 366, 142, 203, 166, 248]
}];

bookdata=[{
  name: 'Book count',
  colorByPoint: true,
  data: [
      ['Literature', 150],
      ['DataScience', 200],
      ['ArtificialIntelligence', 100],
      ['Engineering', 500],
      ['Mathematics', 200],
      ['Computer Applications',300]
  ]
}];
data=[{
  name: 'Used books',
  data: [350,400,300,500,700,640,580,250]
}, {
  name: 'Unused books',
  data: [80, 98, 75, 62, 91,20,36,58]
}];
  ngOnInit() {
  }

}
