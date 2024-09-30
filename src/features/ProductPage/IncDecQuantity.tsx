import { useState } from "react";
import { BounceLoader } from "react-spinners";

const IncDecQuantity = ({
  quantity,
  handleIncrease = () => {},
  handleDecrease = () => {},
  isUpdating,
}: {
  quantity: number;
  handleIncrease?: (quantity: number) => void;
  handleDecrease?: (quantity: number) => void;
  isUpdating?: boolean;
}) => {
  const [count, setCount] = useState<number>(quantity);
  return (
    <div className="border border-secondary flex">
      <div
        className="bg-secondary/20 w-10 aspect-square border-r border-black grid place-items-center cursor-pointer"
        onClick={() => {
          handleDecrease(count > 1 ? count - 1 : count);
          setCount((c) => {
            if (c > 1) {
              return c - 1;
            } else {
              return c;
            }
          });
        }}
      >
        -
      </div>
      <div className="w-10 aspect-square grid place-items-center border-r border-black">
        {!isUpdating ? count : <BounceLoader size={20} />}
      </div>
      <div
        className="bg-secondary/20 w-10 aspect-square grid place-items-center cursor-pointer"
        onClick={() => {
          setCount((c) => c + 1);
          handleIncrease(count + 1);
        }}
      >
        +
      </div>
    </div>
  );
};

export default IncDecQuantity;
