import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ILogin} from '../others/interfaces';
import {AuthService} from '../others/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  styles: [`:host {
    width: 100%;
    max-width: 26.5rem;
  }`]
})
export class LoginPageComponent implements OnInit {
  warning: string = null
  form: FormGroup;
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    const user: ILogin = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    const userName = this.auth.login(user)
    this.form.reset()
    if (userName) {
      this.router.navigate(['/home/user', userName])
    } else {
      this.warning = 'Не верный логин или пароль'
    }
  }
}
