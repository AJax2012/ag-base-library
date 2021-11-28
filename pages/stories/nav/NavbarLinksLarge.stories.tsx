import NavbarLinks, { NavbarLinksProps } from "./NavbarLinks";
import { NavbarLinkProps } from "./NavbarLink";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Components/Navbar/Navbar Links/Large Screens",
  component: NavbarLinks,
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

export const Default: Story<NavbarLinksProps> = (args) => (
  <NavbarLinks {...args} links={links} />
);
