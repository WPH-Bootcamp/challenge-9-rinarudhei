import React from "react";
import { FieldGroup, Field } from "../ui/field";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../ui/button";

export default function RegisterForm() {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmedPassword, setConfirmedPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleEyeToggle = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <FieldGroup className="grid gap-4 lg:gap-5">
      <div className="grid gap-4 lg:gap-5">
        <Field>
          <Input
            id="user-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-neutral-950 h-14 lg:h-15 rounded-xl lg:rounded-lg "
            placeholder="Name"
          />
        </Field>
        <Field>
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
          <Input
            id="user-phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="text-neutral-950 h-14 lg:h-15 rounded-xl lg:rounded-lg "
            placeholder="Number Phone"
          />
        </Field>
        <Field>
          <div className="relative">
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
        <Field>
          <div className="relative">
            <Input
              id="confirm-password"
              type={showPassword ? "text" : "password"}
              value={confirmedPassword}
              onChange={(e) => setConfirmedPassword(e.target.value)}
              className="text-neutral-950 h-14 lg:h-15 rounded-xl lg:rounded-lg text-base leading-7.5 tracking-tight"
              placeholder="Confirm Password"
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
      <Button
        type="submit"
        variant="default"
        className=" w-full h-12 lg:h-14 rounded-[100px] bg-primary-100"
      >
        <span className="text-sm leading-7 lg:text-base lg:leading-7.5 text-neutral-25">
          Register
        </span>
      </Button>
    </FieldGroup>
  );
}
