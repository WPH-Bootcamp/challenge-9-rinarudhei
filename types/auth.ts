import { IUser } from "./user";

export interface IRegisterParam {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface ILoginParam {
  email: string;
  password: string;
}

export interface IUpdateProfileParam {
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface ILoginResponse {
  user: IUser;
  token: string;
}

export interface IRegisterResponse {
  user: IUser & { latitude: number; longitude: number };
  token: string;
}
