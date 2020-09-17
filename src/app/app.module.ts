import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {AuthLayoutComponent} from './layouts/components/auth-layout/auth-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrPageComponent } from './registr-page/registr-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainLayoutComponent } from './layouts/components/main-layout/main-layout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AuthService} from './others/auth.service';
import { UserComponent } from './others/components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    LoginPageComponent,
    RegistrPageComponent,
    HomePageComponent,
    MainLayoutComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
