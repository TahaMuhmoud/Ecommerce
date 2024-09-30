import { useSearchParams } from "react-router-dom";

const SORT_OPTIONS = [
  {
    label: "price asc",
    value: "-price",
  },
  {
    label: "price dsc",
    value: "price",
  },
  {
    label: "rating asc",
    value: "-ratingsAverage",
  },
  {
    label: "rating dsc",
    value: "ratingsAverage",
  },
];
const SortMenu = () => {
  const [URLSearchParams, SetURLSearchParams] = useSearchParams();
  const handleSortClick = (sortBy: string) => {
    URLSearchParams.set("sort", sortBy);
    SetURLSearchParams(URLSearchParams);
  };
  return (
    <div className="w-full bg-clr-two absolute top-full z-[100] flex flex-wrap gap-5 p-5">
      {SORT_OPTIONS.map((opt, i) => (
        <div
          key={i}
          className="p-4 color-main cursor-pointer hover:bg-secondary/50"
          onClick={() => handleSortClick(opt.value)}
        >
          {opt.label}
        </div>
      ))}
    </div>
  );
};

export default SortMenu;
