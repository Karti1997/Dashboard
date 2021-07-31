import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { AppComponent } from './app.component';
import {UserComponent} from './user/user.component';
import { CounterComponent } from './counter/counter.component';
import { BookusageComponent } from './bookusage/bookusage.component';
import { CreateComponent } from './create/create.component';
import { CustomComponent } from './custom/custom.component';
import {AuthhomeComponent } from './authhome/authhome.component';
import { TilemapComponent } from './shared/Tilemap/tilemap.component';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'user',component:AuthhomeComponent },
  {path:'gatecount',component:UserComponent},
  {path:'member/:name',component:MemberComponent},
  {path:'counter',component:CounterComponent},
  {path: 'bookusage',component:BookusageComponent},
  {path: 'custom',component:CustomComponent},
  {path: 'create',component:CreateComponent},
  {path:'rackspace',component:TilemapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
