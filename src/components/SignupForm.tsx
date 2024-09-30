import { FieldError, FieldValues, useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../utils/constants";
import { SignupError, SignupParams, SignupReturn } from "../services/auth";
import { useSignUp } from "../hooks/Auth/useSignUp";
import LoadingComponent from "./LoadingComponent";
import { AxiosError } from "axios";
import { useState } from "react";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const {
    signup,
    isPending: isSigning,
    isError,
    error: signupError,
  } = useSignUp() as {
    signup: (params: SignupParams) => SignupReturn;
    isPending: boolean;
    isError: boolean;
    error: AxiosError<SignupError>;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [x, setx] = useState("");
  const onSubmit = (data: FieldValues) => {
    if (data.password !== data.rePassword) {
      setx("passwords not matches");
      return;
    }
    signup(data as SignupParams);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        {isError && signupError?.response && (
          <div className="bg-red-400 p-3 text-sm">
            {signupError.response.data.message}
          </div>
        )}
        <CustomInput
          name="name"
          label="Username"
          type="text"
          register={register("name", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters long",
            },
          })}
          error={errors.name as FieldError}
        />
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
        <div className="flex flex-wrap gap-3">
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
          <CustomInput
            type="password"
            label="RePassword"
            name="rePassword"
            error={
              x != ""
                ? ({ message: x } as FieldError)
                : (errors.rePassword as FieldError)
            }
            register={register("rePassword", {
              required: "RePassword is required",
              minLength: {
                value: 8,
                message: "rePassword must be at least 8 characters long",
              },
              pattern: {
                value: PASSWORD_REGEX,
                message:
                  "rePassword must contain at least 2 numbers, 2 special characters",
              },
            })}
          />
        </div>
        <CustomInput
          name="phone"
          label="Phone"
          type="tel"
          register={register("phone", {
            required: "Phone number is required",
            maxLength: {
              value: 11,
              message: "phone number must be 11 digits",
            },
            minLength: {
              value: 11,
              message: "phone number must be 11 digits",
            },
          })}
          error={errors.phone as FieldError}
        />
        <div className="">
          <CustomButton type="submit" className="px-5 py-1 rounded-full">
            {isSigning ? <LoadingComponent color="white" /> : "Sign Up"}
          </CustomButton>
        </div>
        <div className="text-sm">
          You have an account ?{" "}
          <Link to={"/login/"} className="text-clr-main underline">
            Login
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
