import MenuToggle, { MenuToggleProps } from "./MenuToggle";
import { Story, Meta } from "@storybook/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ThemeProvider } from "next-themes";

export default {
  title: "Components/Navbar/Menu Toggle Open",
  component: MenuToggle,
  parameters: {
    viewport: {
      defaultViewport: "iphone6",
    },
  },
  argTypes: {
    stroke: {
      defaultValue: "black",
    },
  },
} as Meta;

export const Default: Story<MenuToggleProps> = (args) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <ThemeProvider forcedTheme="light" enableSystem={false}>
      <motion.div initial={false} animate={navbarOpen ? "open" : "closed"}>
        <MenuToggle {...args} toggle={() => setNavbarOpen(!navbarOpen)} />
      </motion.div>
    </ThemeProvider>
  );
};
