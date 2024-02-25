import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { CriteriaComponent } from './criteria/criteria.component';


@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    LoginComponent,
    
  ],
  imports: [
    CriteriaComponent,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    NgxExtendedPdfViewerModule,
    AppRoutingModule  
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }