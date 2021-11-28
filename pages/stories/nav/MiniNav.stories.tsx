import MiniNav, { MiniNavProps } from "./MiniNav";
import { Story, Meta } from "@storybook/react";
import { motion } from "framer-motion";
import { NavbarLinkProps } from "./NavbarLink";
import { ThemeProvider } from "next-themes";

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

export default {
  title: "Components/Navbar/Mini Nav",
  component: MiniNav,
  parameters: {
    viewport: {
      defaultViewport: "iphone6",
    },
  },
  argTypes: {
    isOpen: {
      defaultValue: true,
    },
    links: {
      defaultValue: links,
    },
  },
} as Meta;

export const Default: Story<MiniNavProps> = (args) => (
  <motion.nav initial={true} animate="open" className="flex flex-col">
    <MiniNav {...args} />
  </motion.nav>
);
