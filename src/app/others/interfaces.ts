export interface IUser {
  id?: number;
  token: string;
  name: string;
  secondName: string
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IAuthResponse {
  idToken: string;
}


