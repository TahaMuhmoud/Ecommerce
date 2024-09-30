import { FieldError, FieldValues, useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput";

import { CgClose } from "react-icons/cg";
import { useAddAddress } from "../../hooks/Address/useAddAddress";
import { BounceLoader } from "react-spinners";
import { Address } from "../../services/addresses";
import { useShowAddAddressForm } from "../../hooks/ContextHooks/useShowAddAddressForm";

const AddAdressPopup = () => {
  const { setShowAddAddressForm } = useShowAddAddressForm();
  const {
    mutate: addedAddress,
    isPending: isAdding,
    data: addedResponse,
  } = useAddAddress();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddAddress = (data: FieldValues) => {
    addedAddress(data as Address);
    if (addedResponse?.message == "success") handleClose();
  };
  const handleClose = () => {
    setShowAddAddressForm(false);
  };
  return (
    <div className="w-full md:w-[500px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000] bg-primary border border-secondary p-5">
      <span className="absolute top-5 right-5" onClick={handleClose}>
        <CgClose size={22} />
      </span>
      <form action="" onSubmit={handleSubmit(handleAddAddress)}>
        <div className="flex flex-col gap-3">
          <CustomInput
            label="Name"
            name="name"
            type="text"
            register={register("name", {
              required: "Name is required",
            })}
            error={errors?.name as FieldError}
          />
          <CustomInput
            label="City"
            name="city"
            type="text"
            register={register("city", {
              required: "city is required",
            })}
            error={errors.city as FieldError}
          />
          <CustomInput
            label="Phone"
            name="phone"
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
          <CustomInput
            label="Details"
            name="details"
            type="text"
            register={register("details")}
            error={errors.details as FieldError}
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-5 py-2 color-main hover:bg-secondary/20"
            >
              {isAdding ? <BounceLoader size={25} /> : "Add"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAdressPopup;
