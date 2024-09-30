import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import AddressSelect from "../../components/AddressSelect";
import { useAllUserAddresses } from "../../hooks/Address/useAllUserAddresses";
import { GetAdddressReturn } from "../../services/addresses";
import { CartReturn } from "../../services/cart";
import TwoColsTableRow from "../../components/TwoColsTableRow";
import PaymentPopup from "../Applayout/PaymentPopup";
import { usePaymentContext } from "../../hooks/ContextHooks/usePaymentContext";
import { useShowAddAddressForm } from "../../hooks/ContextHooks/useShowAddAddressForm";

const CartDetails = ({ cartData }: { cartData: CartReturn }) => {
  const { setShowAddAddressForm } = useShowAddAddressForm();
  const { showPaymentPopup, setShowPaymentPopup } = usePaymentContext();
  const { data: allAddresses, isLoading: isLoadingAddresses } =
    useAllUserAddresses();

  const [choosedAddress, setChoosedAddress] = useState<GetAdddressReturn>();
  return (
    <div className="w-full flex flex-col gap-5">
      {showPaymentPopup && choosedAddress && (
        <PaymentPopup address={choosedAddress!} cartData={cartData} />
      )}
      <h4 className="text-4xl font-extralight">CART TOTALS</h4>
      <hr className="h-[1px] bg-secondary" />
      <div className="">
        <TwoColsTableRow colOne={"Shipping"} colTwo={"Free"} />

        <TwoColsTableRow colOne={"TAX"} colTwo={"0£"} />

        <TwoColsTableRow
          colOne={"SubTotal"}
          colTwo={cartData?.data.totalCartPrice + "£"}
        />
        <TwoColsTableRow
          colOne={"ADDRESS"}
          colTwo={
            <div
              className="flex flex-wrap gap-2"
              onClick={() => setShowAddAddressForm(true)}
            >
              {!allAddresses ||
              allAddresses.data.length <= 0 ||
              isLoadingAddresses ? null : (
                <AddressSelect
                  addresses={allAddresses?.data}
                  changeAddress={setChoosedAddress}
                />
              )}
              <CustomButton className="py-1 px-2">Add New</CustomButton>
            </div>
          }
        />
      </div>
      <hr className="h-0.5 bg-secondary" />
      <div className="flex justify-between">
        <span className="text-2xl font-black">TOTAL</span>
        <span className="text-2xl">{cartData?.data.totalCartPrice}£</span>
      </div>
      <CustomButton
        className="w-full py-3"
        disabled={cartData.numOfCartItems <= 0}
        onClick={() => setShowPaymentPopup(true)}
      >
        PROCEED TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDetails;
