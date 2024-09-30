import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
export const PaymentContext = createContext<{
  showPaymentPopup: boolean;
  setShowPaymentPopup: Dispatch<SetStateAction<boolean>>;
}>({
  showPaymentPopup: false,
  setShowPaymentPopup: () => {},
});
const PaymentProvider = ({ children }: { children: ReactNode }) => {
  const [showPaymentPopup, setShowPaymentPopup] = useState<boolean>(false);
  return (
    <PaymentContext.Provider value={{ showPaymentPopup, setShowPaymentPopup }}>
      {children}
    </PaymentContext.Provider>
  );
};

export default PaymentProvider;
