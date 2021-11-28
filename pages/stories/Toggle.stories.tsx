import Toggle, { ToggleProps } from "./Toggle";
import { Story, Meta } from "@storybook/react";
import { useState } from "react";
import cn from "classnames";

export default {
  title: "Components/Toggle",
  component: Toggle,
} as Meta;

export const Default: Story<ToggleProps> = (args) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Toggle
      {...args}
      isChecked={isChecked}
      handleClick={() => setIsChecked(!isChecked)}
    />
  );
};

export const ExpandedExample: Story<ToggleProps> = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Toggle
      isChecked={isChecked}
      handleClick={() => setIsChecked(!isChecked)}
      translationDuration="duration-700"
      trueColor="bg-blue-700"
      falseColor="bg-gray-200"
      inputClasses={cn("lg:w-5 w-3 lg:h-5 h-3", {
        "lg:ml-1": isChecked,
        "lg:ml-0.5": !isChecked,
      })}
      wrapperClasses="lg:w-12 w-8 lg:h-6 h-4 lg:mx-3 mx-2"
    />
  );
};
