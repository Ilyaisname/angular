import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthLayoutComponent} from './layouts/components/auth-layout/auth-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegistrPageComponent} from './registr-page/registr-page.component';
import {MainLayoutComponent} from './layouts/components/main-layout/main-layout.component';
import {AuthGuard} from "./others/auth.guard";

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'registration', component: RegistrPageComponent}
    ]
  },
  {
    path: 'home', component: MainLayoutComponent, canActivate: [AuthGuard], children: [
      {path: 'user/:name', component: HomePageComponent}
    ]
  },
  { path: '**', redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
