import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { AddblogComponent } from './components/addblog/addblog.component'
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ShwblogComponent } from './components/shwblog/shwblog.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {JwPaginationModule} from 'jw-angular-pagination';
import { AdminComponent } from './components/admin/admin.component';
import { DeleteComponent } from './components/delete/delete.component';
import { UpdateComponent } from './components/update/update.component';
import { ListblogsComponent } from './components/listblogs/listblogs.component';
import { ListusersComponent } from './components/listusers/listusers.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    AddblogComponent,
    ShwblogComponent,
    AdminComponent,
    DeleteComponent,
    UpdateComponent,
    ListblogsComponent,
    ListusersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule,
    NgxPaginationModule,
    JwPaginationModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
