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


const routes: Routes = [
  {path: 'navbar', component: NavbarComponent},
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'add', component: AddblogComponent},
  {path: 'shw/:id', component: ShwblogComponent},
  {path: 'admin', component: AdminComponent,
    children: [
      {path: 'update/:id', component: UpdateComponent},
      {path: 'delete/:id', component: DeleteComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
