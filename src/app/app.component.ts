import { Component } from '@angular/core'
import {v4 as uuidv4 } from 'uuid'
import {IUser} from "./others/interfaces";

const Users: Array<IUser> = [
    {
        name: 'Игорь',
        secondName: 'Соколов',
        email: 'as@mail.ru',
        password: '1234562',
        token: uuidv4(),
        id: 1
    },
    {
        name: 'Сергей',
        secondName: 'Быстрый',
        email: 'vas@mail.ru',
        password: '123456',
        token: uuidv4(),
        id: 2
    }

]
localStorage.setItem('Users', JSON.stringify(Users))
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

}

