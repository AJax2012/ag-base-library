import Alert from "./NavAlert";
import { ReactElement, useEffect, useState } from "react";
import NavbarLinks from "./NavbarLinks";
import Link from "next/link";
import { motion } from "framer-motion";
import MenuToggle from "./MenuToggle";
import MiniNav from "./MiniNav";
import { NavbarLinkProps } from "./NavbarLink";
import cn from "classnames";
import ThemeToggle from "../ThemeToggle";

export interface NavbarProps {
  brandText: string;
  alertText?: ReactElement | ReactElement[] | string;
  displayAlert: boolean;
  expandedOnlyNavLinks?: NavbarLinkProps[];
  navLinks: NavbarLinkProps[];
  sticky?: boolean;
}

export default function Navbar({
  brandText,
  alertText,
  displayAlert,
  expandedOnlyNavLinks,
  navLinks,
  sticky = false,
}: NavbarProps) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const allLinks = expandedOnlyNavLinks
    ? [...navLinks, ...expandedOnlyNavLinks]
    : navLinks;

  useEffect(() => {
    if (displayAlert && !alertText) {
      console.error("Alert requres custom text");
    }
  }, [displayAlert, alertText]);

  return (
    <>
      <motion.nav
        className="relative block items-center justify-between 2xl:mb-10 lg:mb-6 mb-4"
        initial={false}
        animate={navbarOpen ? "open" : "closed"}
      >
        <div
          className={cn("w-full px-2 py-3 z-50 nav", {
            "fixed top-0 left-0 right-0": sticky,
            "flex flex-wrap": !sticky,
          })}
        >
          <div className="container flex flex-wrap items-center justify-between nav-container">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link href="/">
                <a className="leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                  {brandText}
                </a>
              </Link>
              <MenuToggle toggle={() => setNavbarOpen(!navbarOpen)} />
            </div>
            <div className="lg:flex hidden flex-grow items-center justify-end">
              <ThemeToggle />
              <NavbarLinks links={allLinks} />
            </div>
          </div>
          {sticky && (
            <MiniNav isOpen={navbarOpen} links={navLinks} sticky={true} />
          )}
        </div>
        {!sticky && <MiniNav isOpen={navbarOpen} links={navLinks} />}
        {displayAlert && alertText && <Alert>{alertText}</Alert>}
      </motion.nav>
    </>
  );
}
