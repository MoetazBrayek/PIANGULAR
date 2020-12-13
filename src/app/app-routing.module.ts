import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AddblogComponent} from './components/addblog/addblog.component';
import {ShwblogComponent} from './components/shwblog/shwblog.component';
import {AdminComponent} from './components/admin/admin.component';
import {UpdateComponent} from './components/update/update.component';
import {DeleteComponent} from './components/delete/delete.component';
import {ListusersComponent} from './components/listusers/listusers.component';
import {ListblogsComponent} from './components/listblogs/listblogs.component';
import {DeleteuserComponent} from './components/deleteuser/deleteuser.component';


const routes: Routes = [
  {path: 'navbar', component: NavbarComponent},
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'add', component: AddblogComponent},
  {path: 'shw/:id', component: ShwblogComponent},
  // by the way go back and user children is better ..
  {path: 'admin', component: AdminComponent},
  {path: 'admin/listuser', component: ListusersComponent},
  {path: 'admin/addblog', component: AddblogComponent},
  {path: 'admin/listblog', component: ListblogsComponent},
  {path: 'admin/update/:id', component: UpdateComponent},
  {path: 'admin/delete/:id', component: DeleteComponent},
  {path: 'admin/deleteuser/:id', component: DeleteuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
