import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import {Authservice} from './auth.service';
import {User} from './auth-data.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string;
  role:string;
  constructor(private router: Router
  ,private authservice: Authservice,
  public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.username=data.username;
    }

  ngOnInit() {
    
  }
  onLogin(form: NgForm): void {
    
    if (form.invalid) {
      return;
    } else {
      this.authservice.login(form.value.username, form.value.password);
      if(form.value.username=="18mx111"){
        this.role="student";
      }else{
        this.role="others";
      }
    }
      this.dialogRef.close({event:'close',data:this.role});
    }
  }
