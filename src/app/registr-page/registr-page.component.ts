import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IUser} from "../others/interfaces";
import {v4 as uuidv4 } from 'uuid'
import {AuthService} from "../others/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registr-page',
  templateUrl: './registr-page.component.html',
  styleUrls: ['./registr-page.component.css'],
  styles: [`:host {
    width: 100%;
    max-width: 26.5rem;
  }`]
})

export class RegistrPageComponent implements OnInit {
  form: FormGroup;

  constructor(
      private auth: AuthService,
      private router: Router
  ) { }
  v(control: FormControl): {[key: string]: boolean} {
    const pass = control.get('password').value
    const conf = control.get('confirmPassword').value

    if (pass !== conf) return {'matchPassword': true}
    else return null
  }

  ngOnInit(): void {
    this.form = new FormGroup( {
      name: new FormControl(null, [
        Validators.required
      ]),
      secondName: new FormControl(null, [
          Validators.required
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    const newUser: IUser = {
      name: this.form.value.name,
      secondName: this.form.value.secondName,
      email: this.form.value.email,
      password: this.form.value.password,
      token: uuidv4()
    }

    const token = this.auth.reg(newUser)
    this.form.reset()
    if (token) {
      this.router.navigate(['/home/user', newUser.name])
    }
  }
}
