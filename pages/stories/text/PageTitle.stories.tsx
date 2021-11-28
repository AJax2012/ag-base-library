import PageTitle, { PageTitleProps } from "./PageTitle";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/Text/Page Title",
  component: PageTitle,
} as Meta;

export const Default: Story<PageTitleProps> = (args) => (
  <PageTitle {...args}>Page Title</PageTitle>
);
