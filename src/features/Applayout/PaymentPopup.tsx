import { CgClose } from "react-icons/cg";
import { GiCash } from "react-icons/gi";
import { RiVisaLine } from "react-icons/ri";
import CustomButton from "../../components/CustomButton";
import { useCreateOrder } from "../../hooks/Orders/useCreateOrder";
import { CartReturn } from "../../services/cart";
import { GetAdddressReturn } from "../../services/addresses";
import { useState } from "react";
import { BounceLoader } from "react-spinners";
import { useOnlineCheckout } from "../../hooks/Checkouts/useOnlineCheckout";
import { usePaymentContext } from "../../hooks/ContextHooks/usePaymentContext";

const PaymentPopup = ({
  address,
  cartData,
}: {
  cartData: CartReturn;
  address: GetAdddressReturn;
}) => {
  const { setShowPaymentPopup } = usePaymentContext();
  const [radioChecked, setRadioChecked] = useState<number>(0);

  const { mutate: createOrder, isPending: isCreating } = useCreateOrder();
  const { mutate: checkoutOnline, isPending: isCheckout } = useOnlineCheckout();
  const handleClose = () => {
    setShowPaymentPopup(false);
  };
  const handleProceed = () => {
    if (radioChecked == 0) {
      createOrder({
        cartID: cartData?.cartId || "",
        shippingAddress: address!.data!,
      });
    } else {
      checkoutOnline({
        cartID: cartData?.cartId || "",
        shippingAddress: address!.data!,
      });
    }
  };
  return (
    <div className="w-full md:w-[500px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000] bg-primary border border-secondary p-5 pt-10">
      <span className="absolute top-5 right-5" onClick={handleClose}>
        <CgClose size={22} />
      </span>
      <div className="flex items-center justify-center gap-2">
        <div className="w-fit flex gap-2 items-center text-lg font-bold p-2 rounded-lg border-2 border-secondary">
          <label htmlFor="cash-inp" className="flex gap-2 items-center">
            <GiCash size={25} /> Cash
          </label>
          <input
            type="radio"
            id="cash-inp"
            name="payment"
            value={0}
            checked={radioChecked == 0}
            onChange={(e) => {
              setRadioChecked(Number(e.target.value));
            }}
          />
        </div>
        <div className="w-fit flex gap-2 items-center text-lg font-bold p-2 rounded-lg border-2 border-secondary">
          <label htmlFor="cash-inp" className="flex gap-2 items-center">
            <RiVisaLine size={25} /> Visa
          </label>
          <input
            type="radio"
            id="cash-inp"
            name="payment"
            value={1}
            checked={radioChecked == 1}
            onChange={(e) => {
              setRadioChecked(Number(e.target.value));
            }}
          />
        </div>
      </div>
      <CustomButton className="w-full py-3 mt-5" onClick={handleProceed}>
        {!isCreating || !isCheckout ? (
          "PROCEED TO CHECKOUT"
        ) : (
          <BounceLoader size={25} color="white" />
        )}
      </CustomButton>
    </div>
  );
};

export default PaymentPopup;
