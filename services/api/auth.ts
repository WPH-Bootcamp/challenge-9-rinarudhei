import { ILoginParam, IRegisterParam } from "@/types/auth";
import { api } from "./base";

export const register = async (data: IRegisterParam) => {
  const response = await api.post("/api/auth/register", {
    data,
  });

  return response.data;
};

export const login = async (data: ILoginParam) => {
  const response = await api.post("/api/auth/login", {
    data,
  });

  return response.data;
};
