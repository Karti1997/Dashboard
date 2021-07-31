import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {User} from './auth-data.model';
@Injectable({ providedIn: 'root' })
export class Authservice {
  constructor( private http: HttpClient, private router: Router ) {}
  private user: User;
  login(name: string, password: string){
    const authData = { name: name, password: password};
    console.log(authData);
     this.http.post<{ user:any }>('http://localhost:3000/api/user/login', authData)
    .subscribe(response => {
      this.user=response.user;
      if (response.user.role=="student") {
        this.router.navigate(['/member',this.user.name]);
      } else{
        this.router.navigate(['/user']);
      }
    });
  }
}
