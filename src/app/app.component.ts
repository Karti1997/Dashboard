import { Component,OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, RouterModule } from '@angular/router'
import { NgForm } from '@angular/forms';
import {LoginComponent} from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboardapp';
  loggeduser:string;
  user: boolean;
  notuser: boolean;
  authuser:boolean;
  constructor(public dialog: MatDialog,public router:Router) {}
  ngOnInit() {
    this.notuser=true;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px',
      data: {user:this.user}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loggeduser=result.data;
      if(this.loggeduser=="others"){
        this.authuser=true;
        this.notuser=false;
      }else{
      this.user = true;
      this.notuser=false;
      console.log(this.loggeduser);
      }
    });
  }
  onloggedout(){
    this.user=false;
    this.authuser=false;
    this.notuser=true;
  }
}
