import PageTitle, { PageTitleProps } from "./PageTitle";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "next-themes";

export default {
  title: "Components/Text/Page Title",
  component: PageTitle,
} as Meta;

export const LightTheme: Story<PageTitleProps> = (args) => (
  <ThemeProvider forcedTheme="light" enableSystem={false}>
    <PageTitle {...args}>Page Title</PageTitle>
  </ThemeProvider>
);

export const DarkTheme: Story<PageTitleProps> = (args) => (
  <ThemeProvider forcedTheme="dark" enableSystem={false}>
    <PageTitle {...args}>Page Title</PageTitle>
  </ThemeProvider>
);
