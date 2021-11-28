import Subtitle, { SubtitleProps } from "./Subtitle";
import { Story, Meta } from "@storybook/react";
import Link from "next/link";

export default {
  title: "Components/Text/Subtitle",
  component: Subtitle,
} as Meta;

const Template: Story<SubtitleProps> = (args) => <Subtitle {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: "Section Header",
};

export const Hyperlink = Template.bind({});
Hyperlink.args = {
  children: <Link href="#">Subtitle</Link>,
  classNames: "hover:underline",
};
