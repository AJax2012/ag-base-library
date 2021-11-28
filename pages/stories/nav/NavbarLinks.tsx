import NavbarLink, { NavbarLinkProps } from "./NavbarLink";

export interface NavbarLinksProps {
  links: NavbarLinkProps[];
}

const NavbarLinks = ({ links }: NavbarLinksProps) => {
  return (
    <ul className="flex lg:flex-row flex-col lg:mx-0 ml-2 mr-5 list-none">
      {(links ?? []).map((link) => (
        <NavbarLink key={link.text} href={link.href} text={link.text} />
      ))}
    </ul>
  );
};

export default NavbarLinks;
