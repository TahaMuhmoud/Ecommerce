import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export const AddAddressContext = createContext<{
  showAddAddressForm: boolean;
  setShowAddAddressForm: Dispatch<SetStateAction<boolean>>;
}>({
  showAddAddressForm: false,
  setShowAddAddressForm: () => {},
});

const AddAdressProvider = ({ children }: { children: ReactNode }) => {
  const [showAddAddressForm, setShowAddAddressForm] = useState<boolean>(false);
  return (
    <AddAddressContext.Provider
      value={{ showAddAddressForm, setShowAddAddressForm }}
    >
      {children}
    </AddAddressContext.Provider>
  );
};

export default AddAdressProvider;
