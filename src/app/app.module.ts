import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './common/register/register.component';
import { LoginComponent } from './common/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { AddsujetComponent } from './addsujet/addsujet.component';
import { ListsujetComponent } from './listsujet/listsujet.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AllsujetComponent } from './allsujet/allsujet.component';
import { SujetinfoComponent } from './sujetinfo/sujetinfo.component';
import { AuthInterceptor } from './common/authintersepter';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AddsujetComponent,
    ListsujetComponent,
    AllsujetComponent,
    SujetinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    MatPaginatorModule,
    MatIconModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatDatepickerModule

  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
