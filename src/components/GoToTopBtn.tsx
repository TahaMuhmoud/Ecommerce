import CustomButton from "./CustomButton";
import { MdArrowUpward } from "react-icons/md";

const GoToTopBtn = () => {
  return (
    <CustomButton
      className="fixed bottom-10 right-10 p-3 rounded-full z-[1000]"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <MdArrowUpward size={25} />
    </CustomButton>
  );
};

export default GoToTopBtn;
