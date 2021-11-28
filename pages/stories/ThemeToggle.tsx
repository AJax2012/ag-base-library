import cn from "classnames";
import { useMemo } from "react";
import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";
import Toggle from "./Toggle";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = useMemo(() => theme === "dark", [theme]);

  return (
    <div className="flex lg:my-0 my-3">
      <BsSun className="my-auto lg:text-xl text-md" />
      <Toggle
        isChecked={isDark}
        handleClick={() => setTheme(isDark ? "light" : "dark")}
        translationDuration="duration-700"
        trueColor="bg-blue-700"
        falseColor="bg-gray-200"
        inputClasses={cn("lg:w-5 w-3 lg:h-5 h-3", {
          "lg:ml-1": isDark,
          "lg:ml-0.5": !isDark,
        })}
        wrapperClasses="lg:w-12 w-8 lg:h-6 h-4 lg:mx-3 mx-2"
      />
      <BsMoon className="my-auto lg:text-xl text-md" />
    </div>
  );
};

export default ThemeToggle;
