import { useContext } from "react";
import { PaymentContext } from "../../context/PaymentProvider";

export function usePaymentContext() {
  const { showPaymentPopup, setShowPaymentPopup } = useContext(PaymentContext);
  return { showPaymentPopup, setShowPaymentPopup };
}
