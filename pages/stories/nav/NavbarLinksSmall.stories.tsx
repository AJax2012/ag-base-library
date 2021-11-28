import NavbarLinks, { NavbarLinksProps } from "./NavbarLinks";
import { NavbarLinkProps } from "./NavbarLink";
import { Story, Meta } from "@storybook/react";
import { ThemeProvider } from "next-themes";

export default {
  title: "Components/Navbar/Navbar Links/Small Screens",
  component: NavbarLinks,
  parameters: {
    viewport: {
      defaultViewport: "iphone6",
    },
  },
} as Meta;

const links: NavbarLinkProps[] = [
  {
    text: "Home",
    href: "#",
  },
  {
    text: "About",
    href: "#",
  },
];

export const Light: Story<NavbarLinksProps> = (args) => (
  <ThemeProvider forcedTheme="light">
    <NavbarLinks {...args} links={links} />
  </ThemeProvider>
);

export const Dark: Story<NavbarLinkProps> = (args) => (
  <ThemeProvider forcedTheme="dark">
    <NavbarLinks {...args} links={links} />
  </ThemeProvider>
);
