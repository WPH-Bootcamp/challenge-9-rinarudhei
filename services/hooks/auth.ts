import { useMutation } from "@tanstack/react-query";
import { login, register } from "../api/auth";
import {
  ILoginParam,
  ILoginResponse,
  IRegisterParam,
  IRegisterResponse,
} from "@/types/auth";
import { setToken, clearToken } from "@/app/auth/authSlice";
import { setCurrentUser, clearCurrentUser } from "@/app/auth/userSlice";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../stores/store";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return useMutation({
    mutationFn: (body: ILoginParam) => login(body),
    onSuccess: (data: ILoginResponse) => {
      dispatch(setToken(data.token));
      dispatch(
        setCurrentUser({
          id: data.user.id,
          avatar: data.user.avatar,
          name: data.user.name,
          createdAt: data.user.createdAt,
          phone: data.user.phone,
          email: data.user.email,
        }),
      );
      router.push("/");
    },
    onError: (e) => {
      toast.error("Failed login user");
    },
  });
};

export const useRegister = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return useMutation({
    mutationFn: (body: IRegisterParam) => register(body),
    onSuccess: (data: IRegisterResponse) => {
      dispatch(setToken(data.token));
      dispatch(setCurrentUser(data.user));
      router.push("/");
    },
    onError: (e) => {
      toast.error(`Failed register user: ${e.message}`);
    },
  });
};

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const logout = useCallback(() => {
    dispatch(clearCurrentUser());
    dispatch(clearToken());
    router.push("/auth");
  }, []);
  return { logout };
};
