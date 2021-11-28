import cn from "classnames";
import { useMemo } from "react";

export interface ToggleProps {
  handleClick: () => void;
  isChecked: boolean;
  translationDuration: string;
  trueColor?: string;
  falseColor?: string;
  wrapperClasses?: string;
  inputClasses?: string;
}

const Toggle = ({
  handleClick,
  isChecked,
  translationDuration,
  trueColor = "bg-green-500",
  falseColor = "bg-gray-200",
  wrapperClasses = "w-12 h-6 mx-3",
  inputClasses = "w-5 h-5",
}: ToggleProps) => {
  const color = useMemo(
    () => (isChecked ? trueColor : falseColor),
    [isChecked, trueColor, falseColor]
  );
  return (
    <div
      className={cn(
        "relative flex rounded-full ease-in bg-gray-500 cursor-pointer",
        wrapperClasses
      )}
      onClick={handleClick}
    >
      <input
        type="checkbox"
        className={cn(
          "absolute rounded-full border-0 border-transparent appearance-none transition-all top-1/2 -translate-y-1/2 ml-1",
          inputClasses,
          translationDuration,
          color,
          {
            "translate-x-full": isChecked,
            "translate-x-0": !isChecked,
          }
        )}
      />
    </div>
  );
};

export default Toggle;
