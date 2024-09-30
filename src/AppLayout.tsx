import Background from "./components/Background";
import ModeToggle from "./components/ModeToggle";
import { Outlet } from "react-router-dom";
import MainNavbar from "./features/Applayout/MainNavbar";
import AddAdressPopup from "./features/Applayout/AddAdressPopup";
import { Toaster } from "react-hot-toast";
import { useShowAddAddressForm } from "./hooks/ContextHooks/useShowAddAddressForm";
import GoToTopBtn from "./components/GoToTopBtn";

const AppLayout = () => {
  const { showAddAddressForm } = useShowAddAddressForm();
  return (
    <div className="w-screen h-full flex flex-wrap relative select-none">
      <Toaster position="top-center" />
      {showAddAddressForm && <AddAdressPopup />}

      <Background />
      <ModeToggle />
      <MainNavbar />
      <div className="w-full overflow-x-hidden h-full min-h-screen p-2 sm:p-5 pb-10 flex justify-center">
        <Outlet />
      </div>
      <GoToTopBtn />
      <div className="w-full p-5 bg-clr-main text-white">
        <p className="w-full text-center">
          &copy; 2024. Taha Mahmoud. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AppLayout;
