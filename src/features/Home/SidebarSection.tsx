import { useNavigate } from "react-router-dom";
import LazyImg from "../../components/LazyImg";
import CirclePagination from "../../components/CirclePagination";
import { Dispatch, SetStateAction } from "react";

interface SidebarSection {
  list: {
    _id: string;
    name: string;
    slug: string;
    image: string;
  }[];
  title: string;
  navTo: string;
  pagination?: {
    numOfPages: number;
    currPage: number;
    next: number;
    prev: number;
    changePage: Dispatch<SetStateAction<number>>;
  };
}

const SidebarSection = ({ list, navTo, title, pagination }: SidebarSection) => {
  const nav = useNavigate();
  return (
    <div className="rounded-lg border border-secondary">
      <div className="flex items-center justify-between border-b border-secondary px-3 py-2">
        <h5 className="text-xl font-bold">{title}</h5>
        {pagination && (
          <CirclePagination
            numOfPages={pagination.numOfPages}
            currPage={pagination.currPage}
            next={pagination.next}
            prev={pagination.prev}
            changePage={pagination.changePage}
          />
        )}
      </div>
      <ul className="">
        {list.map((element, i) => {
          return (
            <li
              key={i}
              className={`px-3  py-2 flex items-center gap-2 cursor-pointer font-semibold ${
                i == list.length - 1 ? "" : "border-b border-secondary"
              }`}
              onClick={() =>
                nav(`/shop?${navTo}=${element._id}`, { state: element })
              }
            >
              <div className="w-10 aspect-square rounded-xl overflow-hidden">
                <LazyImg
                  src={element.image}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <span>{element.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarSection;
