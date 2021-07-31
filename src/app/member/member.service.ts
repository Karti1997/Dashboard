import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
import {User} from '../login/auth-data.model';
@Injectable({providedIn: 'root'})
export class MemberService {
constructor(private http: HttpClient, private router: Router) {}
private users:User;
private usersUpdated = new Subject<User>();


getuser(uname:string){
  this.http
    .get<{ message: string; user: User }>("http://localhost:3000/api/user/"+uname)
    .subscribe(transformeduser => {
      this.users=transformeduser.user;
      this.usersUpdated.next({...this.users});
    });
}
getusersUpdateListener() {
  return this.usersUpdated.asObservable();
}


}