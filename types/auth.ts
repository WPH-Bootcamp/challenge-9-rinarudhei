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
