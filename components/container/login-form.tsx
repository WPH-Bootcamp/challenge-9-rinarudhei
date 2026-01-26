import React, { useEffect } from "react";
import { FieldGroup, Field } from "../ui/field";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { useLogin } from "@/services/hooks/auth";
import { useAppSelector } from "@/services/stores/store";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};
export default function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const { mutate, isPending } = useLogin();
  const token = useAppSelector((state) => state.auth.token);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();
  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, [token]);
  const handleEyeToggle = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmitLogin: SubmitHandler<Inputs> = (data) => {
    mutate({ email: data.email, password: data.password });
  };
  return (
    <form onSubmit={handleSubmit(handleSubmitLogin)}>
      <FieldGroup className="grid gap-4 lg:gap-5">
        <div className="grid gap-4 lg:gap-5">
          <Field>
            <Input
              id="user-email"
              type="email"
              {...register("email", { required: true })}
              className="text-neutral-950 h-14 lg:h-15 rounded-xl lg:rounded-lg "
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-primary-100 text-sm leading-7">
                Email field is required
              </span>
            )}
          </Field>
          <Field>
            <div className="relative">
              <Input
                id="user-password"
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true })}
                className="text-neutral-950 h-14 lg:h-15 rounded-xl lg:rounded-lg text-base leading-7.5 tracking-tight"
                placeholder="Password"
              />
              <span
                onClick={handleEyeToggle}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer text-neutral-950"
              >
                {showPassword ? <Eye size="16" /> : <EyeOff size="16" />}
              </span>
            </div>
            {errors.email && (
              <span className="text-primary-100 text-sm leading-7">
                Password field is required
              </span>
            )}
          </Field>
        </div>
        <Field orientation="horizontal" className="w-full">
          <Checkbox
            id="remember-checkbox"
            name="remember-checkbox"
            className="data-[state=checked]:bg-primary-100 data-[state=checked]:border-none"
          />
          <Label
            htmlFor="remember-checkbox"
            className="text-sm leading-7 lg:text-base lg:leading-7.5 text-neutral-950"
          >
            Remember Me
          </Label>
        </Field>
        <Button
          disabled={isPending}
          type="submit"
          variant="default"
          className=" w-full h-12 lg:h-14 rounded-[100px] bg-primary-100"
        >
          <span className="text-sm leading-7 lg:text-base lg:leading-7.5 text-neutral-25">
            Login
          </span>
        </Button>
      </FieldGroup>
    </form>
  );
}
