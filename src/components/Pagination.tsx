import { Dispatch, SetStateAction } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({
  pagination,
}: {
  pagination: {
    numPages?: number;
    currPage?: number;
    next?: number;
    prev?: number;
    changePage: Dispatch<SetStateAction<number>>;
  };
}) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-end gap-2">
        {pagination.prev && (
          <button
            type="button"
            title="prev"
            className="p-3 border-2 border-secondary rounded-lg"
            onClick={() => pagination.changePage(pagination.prev!)}
          >
            <IoIosArrowBack size={25} />
          </button>
        )}
        <div className="text-xl">
          {pagination.currPage}/{pagination.numPages}
        </div>
        {pagination.next && (
          <button
            type="button"
            title="next"
            className="p-3 border-2 border-secondary rounded-lg"
            onClick={() => pagination.changePage(pagination.next!)}
          >
            <IoIosArrowForward size={25} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
