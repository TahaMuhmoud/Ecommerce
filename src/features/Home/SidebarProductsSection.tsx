import { ReactNode } from "react";

interface SidebarProductsSection {
  title: string;
  children: ReactNode;
}
const SidebarProductsSection = ({
  children,
  title,
}: SidebarProductsSection) => {
  return (
    <div className="w-full">
      <h5 className="px-3 py-2 text-xl font-bold">{title}</h5>
      <div className="flex flex-col gap-1 items-center pb-2 border-b border-secondary">
        {children}
      </div>
    </div>
  );
};

export default SidebarProductsSection;
