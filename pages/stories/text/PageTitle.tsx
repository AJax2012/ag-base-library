import cn from "classnames";

export interface PageTitleProps {
  children: string;
  classNames?: string;
}

const PageTitle = ({ children, classNames }: PageTitleProps) => (
  <h1 className={cn("text-4xl font-bold mb-1 capitalize", classNames)}>
    {children}
  </h1>
);

export default PageTitle;
