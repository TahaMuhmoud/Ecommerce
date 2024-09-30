import { ReactNode } from "react";
import { cn } from "../../utils/helpers";

interface FiltersSidebarSection {
  title: string;
  children: ReactNode;
  className?: string;
}
const FiltersSidebarSection = ({
  title,
  children,
  className,
}: FiltersSidebarSection) => {
  return (
    <div className={cn("w-full flex flex-col gap-2", className)}>
      <div className="w-full">
        <h2 className="text-lg font-bold">{title}</h2>
        <hr className="bg-secondary h-[2px]" />
      </div>
      <div className="px-5">{children}</div>
    </div>
  );
};

export default FiltersSidebarSection;
