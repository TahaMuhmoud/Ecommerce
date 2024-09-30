import { Outlet, useNavigate } from "react-router-dom";
import LazyImg from "../components/LazyImg";
import { useEffect } from "react";

function LoginPage() {
  const token = localStorage.getItem("token") || "";

  const nav = useNavigate();
  useEffect(() => {
    if (token != "") nav("/");
    return () => {};
  }, [nav, token]);
  if (token != "") return null;
  return (
    <div className="w-screen min-h-screen grid md:grid-cols-2 text-black">
      <div className="col-span-1 flex items-center justify-center p-5">
        <Outlet />
      </div>
      <div className="col-span-1 row-start-1 bg- grid place-items-center">
        <LazyImg src="/logo.webp" className="w-full xs:w-[400px] md:w-full" />
      </div>
    </div>
  );
}

export default LoginPage;
