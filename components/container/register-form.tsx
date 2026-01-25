import { useEffect, useState } from "react";
import { FieldGroup, Field } from "../ui/field";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../ui/button";
import { useRegister } from "@/services/hooks/auth";
import { toast } from "sonner";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppSelector } from "@/services/stores/store";
import { useRouter } from "next/navigation";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmedPassword: string;
};
export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { mutate, isPending } = useRegister();
  const token = useAppSelector((state) => state.auth.token);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, [token]);
  const handleEyeToggle = () => {
    setShowPassword((prev) => !prev);
  };
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.password != data.confirmedPassword) {
      toast.error("Your confirmed password didn't match with the password.");
      return;
    }

    mutate({
      email: data.email,
      name: data.name,
      phone: data.phone,
      password: data.password,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup className="grid gap-4 lg:gap-5">
        <div className="grid gap-4 lg:gap-5">
          <Field>
            <Input
              id="user-name"
              type="text"
              {...register("name", { required: true })}
              className="text-neutral-950 h-14 lg:h-15 rounded-xl lg:rounded-lg "
              placeholder="Name"
            />
            {errors.name && (
              <span className="text-primary-100 text-sm leading-7">
                Name field is required
              </span>
            )}
          </Field>
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
            <Input
              id="user-phone"
              type="text"
              {...register("phone", { required: true })}
              className="text-neutral-950 h-14 lg:h-15 rounded-xl lg:rounded-lg "
              placeholder="Number Phone"
            />
            {errors.phone && (
              <span className="text-primary-100 text-sm leading-7">
                Phone field is required
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
              {errors.password && (
                <span className="text-primary-100 text-sm leading-7">
                  Password field is required
                </span>
              )}
            </div>
          </Field>
          <Field>
            <div className="relative">
              <Input
                id="confirm-password"
                type={showPassword ? "text" : "password"}
                {...register("confirmedPassword", { required: true })}
                className="text-neutral-950 h-14 lg:h-15 rounded-xl lg:rounded-lg text-base leading-7.5 tracking-tight"
                placeholder="Confirm Password"
              />
              <span
                onClick={handleEyeToggle}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer text-neutral-950"
              >
                {showPassword ? <Eye size="16" /> : <EyeOff size="16" />}
              </span>
              {errors.confirmedPassword && (
                <span className="text-primary-100 text-sm leading-7">
                  Confirm Password field is required
                </span>
              )}
            </div>
          </Field>
        </div>
        <Button
          type="submit"
          variant="default"
          disabled={isPending}
          className=" w-full h-12 lg:h-14 rounded-[100px] bg-primary-100"
        >
          <span className="text-sm leading-7 lg:text-base lg:leading-7.5 text-neutral-25">
            Register
          </span>
        </Button>
      </FieldGroup>
    </form>
  );
}
