import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import { ILoginParam, ILoginResponse } from "@/types/auth";
import { setToken } from "@/app/auth/authSlice";
import { setCurrentUser } from "@/app/auth/userSlice";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../stores/store";

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
