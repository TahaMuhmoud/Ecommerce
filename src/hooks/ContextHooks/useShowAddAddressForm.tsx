import { useContext } from "react";
import { AddAddressContext } from "../../context/AddAdressProvider";

export function useShowAddAddressForm() {
  const { showAddAddressForm, setShowAddAddressForm } =
    useContext(AddAddressContext);
  return { showAddAddressForm, setShowAddAddressForm };
}
