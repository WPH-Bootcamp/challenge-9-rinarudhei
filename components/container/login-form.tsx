import React from "react";
import { FieldGroup, Field } from "../ui/field";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";

export default function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleEyeToggle = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <FieldGroup className="grid gap-4 lg:gap-5">
      <div className="grid gap-4 lg:gap-5">
        <Field>
          {/* <Label htmlFor="user-email">Email</Label> */}
          <Input
            id="user-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-neutral-950 h-14 lg:h-15 rounded-xl lg:rounded-lg "
            placeholder="Email"
          />
        </Field>
        <Field>
          <div className="relative">
            {/* <Label htmlFor="user-passsword">Password</Label> */}
            <Input
              id="user-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        type="submit"
        variant="default"
        className=" w-full h-12 lg:h-14 rounded-[100px] bg-primary-100"
      >
        <span className="text-sm leading-7 lg:text-base lg:leading-7.5 text-neutral-25">
          Login
        </span>
      </Button>
    </FieldGroup>
  );
}
