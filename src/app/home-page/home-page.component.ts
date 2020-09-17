import { Component, OnInit } from '@angular/core';
import {IUser} from "../others/interfaces";
import {AuthService} from "../others/auth.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  styles:[`:host {
    display: flex;
    flex-direction: column;
    align-items: center;
    }`
  ]
})
export class HomePageComponent implements OnInit {

  users: IUser[] = JSON.parse(localStorage.getItem('Users'))

  constructor(public authService: AuthService ) { }

  ngOnInit(): void {
  }

}
