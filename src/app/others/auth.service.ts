import {Injectable} from '@angular/core';
import {ILogin, IUser} from "./interfaces";
import {Router} from "@angular/router";
// import {IAuthResponse, IUsers} from './interfaces';

@Injectable({providedIn: 'root'})
export class AuthService {
  private Token: string = null

  constructor(private router: Router) {
  }

  login(user: ILogin): string | null {
    let users: Array<IUser> = JSON.parse(localStorage.getItem('Users'))
    let currentUser: any = users.find(i => i.email === user.email && i.password === user.password)

    if (currentUser) {
      this.Token = currentUser.token
      return currentUser.name
    } else return null
  }

  reg(newUser: IUser): string {
    let users: Array<IUser> = JSON.parse(localStorage.getItem('Users'))
    if(newUser) this.Token = newUser.token
    newUser.id = users.length + 1
    users.push(newUser)
    localStorage.setItem('Users', JSON.stringify(users))
    return newUser.token
  }

  logout() {
    this.Token = null
    this.router.navigate(['/'])
  }

  isAuthenticated(): boolean {
    return Boolean(this.Token)
  }
}


