import { Component, OnInit } from '@angular/core';
import {MemberService} from '../member/member.service';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { BooklendComponent } from '../booklend/booklend.component';
import {User} from '../login/auth-data.model';
import { Subscription } from 'rxjs';
import {book} from '../login/book.model';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  highcharts=Highcharts;
  chartOptions={
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
}
  constructor(private Memberservice:MemberService,private route:ActivatedRoute,public dialog: MatDialog) { }
  title:string;
  users: User[] = [];
  username:string;
  data=[
    ['IssuedBooks', 3,],
    ['BooksonDue', 2],
    ['BookscanTake', 2],
]
  private usersSub: Subscription;
  ngOnInit() {
    
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("name")) {
        this.username= paramMap.get("name");
        this.Memberservice.getuser(this.username);
        this.usersSub = this.Memberservice.getusersUpdateListener()
      .subscribe((user: User) => {
      this.users.push(user)
      console.log(this.users);
    });
     } 
    });
  }
  openLoginForm(selectedbook:book) {
    this.dialog.open(BooklendComponent, {width: '500px', height: '450px',data: {book:selectedbook}});
  }
  
}
