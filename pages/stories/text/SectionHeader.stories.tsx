import SectionHeader, { SectionHeaderProps } from "./SectionHeader";
import { Story, Meta } from "@storybook/react";
import Link from "next/link";

export default {
  title: "Components/Text/Section Header",
  component: SectionHeader,
} as Meta;

const Template: Story<SectionHeaderProps> = (args) => (
  <SectionHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Section Header",
};

export const Hyperlink = Template.bind({});
Hyperlink.args = {
  children: <Link href="#">Section Header with Hyperlink</Link>,
  classNames: "hover:underline",
};
