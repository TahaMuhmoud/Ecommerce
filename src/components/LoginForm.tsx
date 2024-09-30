import { FieldError, FieldValues, useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../utils/constants";
import CustomInput from "./CustomInput";
import { LoginError, LoginParams } from "../services/auth";
import { useLogin } from "../hooks/Auth/useLogin";

import { AxiosError } from "axios";
import CustomButton from "./CustomButton";
import LoadingComponent from "./LoadingComponent";

const LoginForm = () => {
  const { state } = useLocation();

  const { mutate: login, error, isError, isPending } = useLogin();
  const loginError = error as AxiosError<LoginError>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      email: state?.email || "tahaaa@gmail.com",
      password: state?.password || "tt123@@1230",
    },
  });

  const onSubmit = (data: FieldValues) => {
    login(data as LoginParams);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex flex-col gap-2">
        {isError && loginError?.response && (
          <div className="bg-red-400 p-3 text-sm">
            {loginError.response.data.message}
          </div>
        )}
        <CustomInput
          type="email"
          label="Email"
          name="email"
          error={errors.email as FieldError}
          register={register("email", {
            required: "Email is required",
            pattern: {
              value: EMAIL_REGEX,
              message: "Invalid email format",
            },
          })}
        />
        <CustomInput
          type="password"
          label="Password"
          name="password"
          error={errors.password as FieldError}
          register={register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
            pattern: {
              value: PASSWORD_REGEX,
              message:
                "Password must contain at least 2 numbers, 2 special characters",
            },
          })}
        />

        {/* <div className="text-sm">
          Forgot your password ?{" "}
          <Link to={"/login/signup"} className="text-clr-main underline">
            Reset
          </Link>
        </div> */}
        <div className="">
          <CustomButton
            type="submit"
            disabled={isPending}
            className="px-5 py-1 rounded-full"
          >
            {isPending ? <LoadingComponent color="white" /> : "Login"}
          </CustomButton>
        </div>
        <div className="text-sm">
          Don't have an account ?{" "}
          <Link to={"/login/signup"} className="text-clr-main underline">
            Sign up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
