import Link from "next/link";

export interface NavbarLinkProps {
  href: string;
  text: string;
}

const NavbarLink = ({ href, text }: NavbarLinkProps) => {
  return (
    <li className="nav-item">
      <Link href={href}>
        <a className="prose dark:prose-dark lg:m-0 text-primary lg:ml-5 m-2 flex lg:text-sm uppercase hover:opacity-75">
          {text}
        </a>
      </Link>
    </li>
  );
};

export default NavbarLink;
