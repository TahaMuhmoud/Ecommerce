import { api } from "./api";

type LoginReturn = {
  message: string;
  token: string;
  user: {
    name: string;
    email: string;
    role: string;
  };
};
export type LoginParams = {
  email: string;
  password: string;
};
export type LoginError = {
  message: string;
  statusMsg: string;
};
export const login: (params: LoginParams) => Promise<LoginReturn> = async ({
  email,
  password,
}) => {
  const { data } = await api.post("/auth/signin", {
    email,
    password,
  });

  return data;
};
export type GetUserParams = {
  email: string;
  password: string;
};
type GetUserReturn = {
  message: string;
  decoded: {
    name: string;
    role: string;
    id: string;
  };
};
export const getUser: (token: string) => Promise<GetUserReturn> = async (
  token
) => {
  const { data } = await api.get("/auth/verifyToken", {
    headers: {
      token,
    },
  });

  return data;
};
// FORGOT PASS
export const resetPassword: (email: string) => Promise<LoginReturn> = async (
  email
) => {
  const { data } = await api.post("/auth/forgotPasswords", { email });
  return data;
};
// SIGNUP
export type SignupParams = {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
};
export type SignupReturn = {
  message: string;
  token: string;
  user: { name: string; email: string; role: string };
};
export type SignupError = {
  message: string;
  errors: { msg: string; param: string; value: string };
};
export const signup: (params: SignupParams) => Promise<SignupReturn> = async (
  params
) => {
  const { data } = await api.post("/auth/signup", { ...params });

  return data;
};
