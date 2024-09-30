import { ReactNode } from "react";

const TwoColsTableRow = ({
  colOne,
  colTwo,
}: {
  colOne: string | ReactNode;
  colTwo: string | ReactNode;
}) => {
  return (
    <div className="flex justify-between">
      <span className="">{colOne}</span>
      <span className=" text-lg">{colTwo}</span>
    </div>
  );
};

export default TwoColsTableRow;
