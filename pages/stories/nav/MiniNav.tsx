import { motion, Variants } from "framer-motion";
import ThemeToggle from "../ThemeToggle";
import { NavbarLinkProps } from "./NavbarLink";
import NavbarLinks from "./NavbarLinks";
import cn from "classnames";

export interface MiniNavProps {
  isOpen: boolean;
  sticky?: boolean;
  links: NavbarLinkProps[];
}

const subMenuAnimate: Variants = {
  open: {
    opacity: 1,
    transition: {
      ease: "easeIn",
      duration: 0.2,
    },
  },
  closed: {
    opacity: 0,
  },
};

const MiniNav = ({ isOpen, links, sticky = false }: MiniNavProps) => (
  <motion.div
    className="lg:hidden absolute w-50 right-0"
    initial={false}
    animate={isOpen ? "open" : "closed"}
    variants={subMenuAnimate}
  >
    <div className="flex container justify-end nav">
      <div
        className={cn("inline", {
          "pt-4": sticky,
          "pt-2": !sticky,
        })}
      >
        <ThemeToggle isLarge={false} id="miniNavThemeToggle" />
        <NavbarLinks links={links} />
      </div>
    </div>
  </motion.div>
);

export default MiniNav;
