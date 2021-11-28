import SectionHeader, { SectionHeaderProps } from "./SectionHeader";
import { Story, Meta } from "@storybook/react";
import Link from "next/link";
import { ThemeProvider } from "next-themes";

export default {
  title: "Components/Text/Section Header",
  component: SectionHeader,
} as Meta;

const Template: Story<SectionHeaderProps> = (args) => (
  <ThemeProvider forcedTheme="light" enableSystem={false}>
    <SectionHeader {...args} />
  </ThemeProvider>
);

export const Light = Template.bind({});
Light.args = {
  children: "Section Header",
};

export const Dark: Story<SectionHeaderProps> = (args) => (
  <ThemeProvider forcedTheme="dark" enableSystem={false}>
    <SectionHeader {...args}>Section Header</SectionHeader>
  </ThemeProvider>
);

export const Hyperlink = Template.bind({});
Hyperlink.args = {
  children: <Link href="#">Section Header with Hyperlink</Link>,
  classNames: "hover:underline",
};
