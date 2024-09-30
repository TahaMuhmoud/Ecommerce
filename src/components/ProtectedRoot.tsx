import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoot = ({ children }: { children: ReactNode }) => {
  const nav = useNavigate();
  const token = localStorage.getItem("token") || "";
  useEffect(() => {
    if (token == "") nav("/login");
    return () => {};
  }, [nav, token]);
  if (token != "") return <>{children}</>;
  else return null;
};

export default ProtectedRoot;
