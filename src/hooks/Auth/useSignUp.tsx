import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { SignupParams, signup as signupFn } from "../../services/auth";

export const useSignUp = () => {
  const nav = useNavigate();
  const {
    mutate: signup,
    error,
    isPending,
    isError,
  } = useMutation({
    mutationFn: (params: SignupParams) => signupFn(params),
    onSuccess(_, vars) {
      nav("/login", { state: { email: vars.email, password: vars.password } });
    },
  });
  return { signup, error, isPending, isError };
};
