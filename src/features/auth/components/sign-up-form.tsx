import { SubmitButton } from "@/components/form/submit-button";
import { Input } from "@/components/ui/input";

const SignUpForm = () => {
  return (
    <form className="flex flex-col gap-2">
      <Input name="username" placeholder="Username" />
      <Input name="email" placeholder="Email" />
      <Input name="password" type="password" placeholder="Password" />
      <Input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
      />
      <SubmitButton label="Sign Up" />
    </form>
  );
};
export { SignUpForm };
