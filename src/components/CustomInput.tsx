import { HTMLInputTypeAttribute } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";

type CustomInputProps = {
  register: UseFormRegisterReturn;
  name: string;
  label: string;
  error: FieldError;
  type: HTMLInputTypeAttribute;
};
const CustomInput = ({
  label,
  type,
  name,
  register,
  error,
}: CustomInputProps) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={name} className="">
        {label}:
      </label>
      <input
        id={name}
        type={type}
        className="border border-black p-2 rounded-lg outline-none"
        {...register}
      />
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-2">
          <MdErrorOutline />
          {error.message}
        </p>
      )}
    </div>
  );
};

export default CustomInput;
