import { ReactElement } from "react";
import cn from "classnames";

export interface ParagraphProps {
  children: ReactElement | ReactElement[] | string;
  classNames?: string;
}

const Paragraph = ({ children, classNames }: ParagraphProps) => (
  <p className={cn("mb-4", classNames)}>{children}</p>
);

export default Paragraph;
