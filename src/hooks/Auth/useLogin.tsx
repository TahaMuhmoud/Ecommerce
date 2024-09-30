import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login, LoginParams } from "../../services/auth";

export const useLogin = () => {
  const nav = useNavigate();
  const { mutate, error, isError, isPending } = useMutation({
    mutationKey: ["login-data"],
    mutationFn: (params: LoginParams) => login(params),
    onSuccess(data) {
      nav("/");
      localStorage.setItem("token", data.token);
    },
  });
  return { mutate, error, isError, isPending };
};
