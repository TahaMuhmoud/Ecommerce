import { Dispatch, SetStateAction } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
interface CirclePagination {
  numOfPages: number;
  currPage: number;
  next: number;
  prev: number;
  changePage: Dispatch<SetStateAction<number>>;
}
const CirclePagination = ({
  numOfPages,
  currPage,
  changePage,
  next,
  prev,
}: CirclePagination) => {
  return (
    <div className="flex items-center gap-3">
      {prev && (
        <button
          type="button"
          title="view prev"
          className="p-1 rounded-full border border-secondary"
          onClick={() => changePage(prev)}
        >
          <BiLeftArrow />
        </button>
      )}
      <div className="">
        {currPage}/{numOfPages}
      </div>
      {next && (
        <button
          type="button"
          title="view next"
          className="p-1 rounded-full border border-secondary"
          onClick={() => changePage(next)}
        >
          <BiRightArrow />
        </button>
      )}
    </div>
  );
};

export default CirclePagination;
