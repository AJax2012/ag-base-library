import cn from "classnames";
import { ReactElement } from "react";

export interface SectionHeaderProps {
  children: ReactElement | ReactElement[] | string;
  classNames?: string;
}

const SectionHeader = ({ children, classNames }: SectionHeaderProps) => (
  <h3 className={cn("mb-4 text-2xl font-semibold", classNames)}>{children}</h3>
);

export default SectionHeader;
