import { Component, OnInit, Input } from '@angular/core';
import {book} from '../../login/book.model';

// Now init modules:


@Component({
  selector: 'app-widget-semigauge',
  templateUrl: './semigauge.component.html',
  styleUrls: ['./semigauge.component.scss']
})
export class SemiGaugeComponent implements OnInit {
  @Input() Fine:book[];
  fine:number;
  amt:number;
  Fineamt=[];
  ngOnInit(){
    for(var i=0;i<this.Fine.length;i++){
      if(new Date()>new Date(this.Fine[i].returndate)){
      var Difference_In_Time =  new Date().getTime()-new Date(this.Fine[i].returndate).getTime() ; 
      var Difference_In_Days = Math.trunc(Difference_In_Time / (1000 * 3600 * 24));
      if(Difference_In_Days>45){
        this.fine=10.00;
      }else{
        this.fine=0.50;
      }
      this.amt=Difference_In_Days*this.fine;
      this.Fineamt.push({name:this.Fine[i].name,amount:this.amt});
    }else{
      this.Fineamt.push({name:this.Fine[i].name,amount:0});
    }

    }
    console.log(this.Fineamt);
  }

}