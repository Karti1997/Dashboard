import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {book} from '../login/book.model';
@Component({
  selector: 'app-booklend',
  templateUrl: './booklend.component.html',
  styleUrls: ['./booklend.component.scss']
})
export class BooklendComponent implements OnInit {
  
  book:book;
  duestatus: String;
  constructor(public dialogRef: MatDialogRef<BooklendComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.book=data.book;
     }
  ngOnInit() {
    if(new Date(this.book.returndate)>new Date()){
      var Difference_In_Time = new Date(this.book.returndate).getTime() - new Date().getTime(); 
      var Difference_In_Days = Math.trunc(Difference_In_Time / (1000 * 3600 * 24));
      this.duestatus=Difference_In_Days+" days Remaining";
      this.fine=0.00;
      this.amt=0.00;
    }else{
      var Difference_In_Time =  new Date().getTime()-new Date(this.book.returndate).getTime() ; 
      var Difference_In_Days = Math.trunc(Difference_In_Time / (1000 * 3600 * 24));
      this.duestatus="Over Due";
      if(Difference_In_Days>45){
        this.fine=10.00;
      }else{
        this.fine=0.50;
      }
      this.amt=Difference_In_Days*this.fine;
    }
    
    this.ngOnChanges();
  }
  bar0: string;  
  bar1: string;  
  bar2: string;  
  bar3: string;  
  bar4: string;
  fine:number;
  amt:number; 
  private colors = ['#0F0', '#9f0', '#FF0', '#F90', '#F00'];  
  //private colors = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];  
  private static measureStrength(date1:Date,date2:Date) {  
      let score = 100;
      var Difference_In_Time = new Date(date2).getTime() - new Date().getTime(); 
      var Difference_In_Days = Math.trunc(Difference_In_Time / (1000 * 3600 * 24)); 
      console.log(Difference_In_Days);
      if(Difference_In_Days<0){
          score=100;
      }else if(Difference_In_Days<5){
          score=80;
      }else if(Difference_In_Days<10){
        score=40;
      }else{
        score=20;
      } 
      return Math.trunc(score);  
  }    
private getColor(score: number) {  
  let idx = 0;  
  if (score > 90) {  
    idx = 4;
  } else if (score > 70) {  
    idx = 3;  
  } else if (score >= 40) {  
    idx = 2;  
  } else if (score >= 20) {  
    idx = 1;  
  }  
  return {  
    idx: idx + 1,  
    col: this.colors[idx]  
  };  
}  
  ngOnChanges(): void {  
      //var password = changes['passwordToCheck'].currentValue;  
      this.setBarColors(5, '#DDD');  
      if (1) {  
          let c = this.getColor(BooklendComponent.measureStrength(this.book.issuedate,this.book.returndate));  
          this.setBarColors(c.idx, c.col);  
      }  
  }  
  private setBarColors(count, col) {  
      for (let _n = 0; _n < count; _n++) {  
          this['bar' + _n] = col;  
      }  
  }  
}