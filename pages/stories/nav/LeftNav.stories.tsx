import { Story, Meta } from "@storybook/react";
import LeftNav, { LeftNavProps } from "./LeftNav";
import { NavbarLinkProps } from "./NavbarLink";
import { motion, Variants } from "framer-motion";
import { ThemeProvider } from "next-themes";
import NavbarLinks from "./NavbarLinks";
import { useState } from "react";
import MenuToggle from "./MenuToggle";
import Link from "next/link";
import cn from "classnames";
import Paragraph from "../text/Paragraph";
import PageTitle from "../text/PageTitle";

const mainLinks: NavbarLinkProps[] = [
  {
    text: "Home",
    href: "#",
  },
  {
    text: "About",
    href: "#",
  },
];

const childLinks: NavbarLinkProps[] = [
  {
    text: "Child 1",
    href: "#",
  },
  {
    text: "Child 2",
    href: "#",
  },
];

export default {
  title: "Components/Navbar/LeftNav",
  component: LeftNav,
  argTypes: {
    links: {
      defaultValue: mainLinks,
    },
    brandText: {
      defaultValue: "Brand Name Here",
    },
    alwaysOpen: {
      defaultValue: false,
    },
  },
} as Meta;

const WithoutToggleTemplate: Story<LeftNavProps> = (args) => (
  <ThemeProvider attribute="class">
    <motion.nav initial={true} animate="open" className="flex flex-col">
      {/* disallow closing side nav for story */}
      <LeftNav {...args} alwaysOpen={true}>
        {args.children}
      </LeftNav>
    </motion.nav>
  </ThemeProvider>
);

export const WithoutToggle = WithoutToggleTemplate.bind({});
WithoutToggle.args = {
  children: <NavbarLinks links={childLinks} isCol removeLeftMargins />,
};

export const WithoutLinks = WithoutToggleTemplate.bind({});
WithoutLinks.args = {
  links: undefined,
  children: <NavbarLinks links={childLinks} isCol removeLeftMargins />,
};

export const FancyChildren = WithoutToggleTemplate.bind({});
FancyChildren.args = {
  children: (
    <>
      <div className="text-gray-600 text-xl uppercase">Posts</div>
      <div className="flex items-center justify-between my-4">
        <div className="w-16">
          <img
            className="w-12 h-12 rounded-full"
            src="https://source.unsplash.com/50x50/?nature"
          />
        </div>
        <div className="flex-1 pl-2">
          <div className="text-gray-700 font-semibold">Next Developers</div>
          <div className="text-gray-600 font-thin">Web House</div>
        </div>
        <div className="text-red-400">20 Posts</div>
      </div>
      <hr className="boder-b-0 my-4" />
      <div className="flex items-center my-4">
        <div className="w-16">
          <img
            className="w-12 h-12 rounded-full"
            src="https://source.unsplash.com/50x50/?logo"
          />
        </div>
        <div className="flex-1 pl-2">
          <div className="text-gray-700 font-semibold">Data Entry</div>
          <div className="text-gray-600 font-thin">Web House</div>
        </div>
        <div className="text-red-400">30 Posts</div>
      </div>
    </>
  ),
};

const subMenuAnimate: Variants = {
  open: {
    opacity: 1,
    width: "auto",
    display: "flex",
    transition: {
      ease: "easeIn",
      duration: 0.2,
    },
  },
  closed: {
    width: 0,
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  },
};

export const WithNavbarExample: Story<LeftNavProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ThemeProvider attribute="class">
      <div className="flex">
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={subMenuAnimate}
          className="min-h-screen"
        >
          <LeftNav {...args} setNavbarOpen={setIsOpen}>
            <NavbarLinks links={childLinks} isCol removeLeftMargins />
          </LeftNav>
        </motion.div>
        <div className="flex-1">
          <motion.nav
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            className="mb-6 nav"
          >
            <div
              className={cn("flex py-3 px-6 space-x-6", {
                "justify-end": isOpen,
                "justify-between": !isOpen,
              })}
            >
              {!isOpen && <MenuToggle toggle={() => setIsOpen(!isOpen)} />}
              <Link href="#">
                <a className="uppercase">Brand Name</a>
              </Link>
            </div>
          </motion.nav>
          <main className="container">
            <PageTitle>Text disappears if sticky</PageTitle>
            <Paragraph classNames="text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              porttitor lacus sed eros tempus scelerisque. Duis dignissim eros
              ac lobortis commodo. Etiam id libero ac lectus lobortis volutpat
              ut ac nibh. Morbi malesuada eu neque vitae consectetur. Quisque
              imperdiet fringilla leo. Pellentesque pretium nibh at porttitor
              porttitor. Duis vestibulum at sapien quis congue. Praesent
              tincidunt auctor quam, et pulvinar est. Etiam neque risus, lacinia
              sit amet massa id, accumsan mattis dolor. Aenean eu erat eu quam
              placerat varius a in lorem.
            </Paragraph>
            <Paragraph classNames="text-2xl">
              Suspendisse tristique rhoncus mi, ut elementum odio viverra sit
              amet. Suspendisse mollis congue nisl, sed hendrerit ligula
              pulvinar dictum. Aliquam erat volutpat. Nam porttitor lacinia arcu
              a fermentum. Vestibulum ante ipsum primis in faucibus orci luctus
              et ultrices posuere cubilia curae; Sed pellentesque ante non
              tincidunt dapibus. Nullam sagittis venenatis odio, eget finibus
              lectus. Ut non ante tincidunt, vestibulum massa id, feugiat nisl.
              Mauris ullamcorper varius mi, et ullamcorper urna varius at. Nam
              eu sagittis risus. Suspendisse mattis felis diam, non sollicitudin
              justo iaculis ac. Donec condimentum massa at nunc blandit, ac
              cursus nulla rhoncus. Donec posuere, lacus non eleifend venenatis,
              purus arcu condimentum nulla, ut sagittis libero nibh quis orci.
            </Paragraph>
            <Paragraph classNames="text-2xl">
              Aenean quis nulla at nibh tristique egestas. Morbi convallis massa
              sed dui aliquet, lobortis cursus nibh luctus. Nulla vestibulum
              enim non magna rhoncus laoreet. Nulla sit amet semper velit. Nunc
              hendrerit accumsan lacus sed iaculis. Phasellus vehicula mi ac
              urna dignissim, vel vehicula mi auctor. Quisque porttitor tortor
              vitae ligula efficitur, vel pharetra quam maximus. Donec placerat
              facilisis ante, sit amet malesuada mauris molestie iaculis. Etiam
              sed bibendum orci. Vestibulum vitae nibh elementum mauris
              tincidunt facilisis. Cras scelerisque ex velit, ornare rhoncus leo
              suscipit ut. Quisque mollis, metus sed lobortis laoreet, turpis
              dolor porta augue, ac tempor purus arcu vel nisi.
            </Paragraph>
            <Paragraph classNames="text-2xl">
              Integer placerat nunc ac tellus vulputate ullamcorper. Nulla ut
              lectus condimentum mi varius pellentesque id eu ipsum. Vivamus
              venenatis, massa quis consequat volutpat, ante nulla dapibus dui,
              eget iaculis tortor nunc at augue. Nunc lorem ipsum, vulputate
              eget tellus eget, suscipit malesuada orci. Cras tincidunt dolor
              leo, non cursus risus vulputate at. Fusce et semper nunc, eget
              sodales odio. Vivamus vel lectus vitae urna lobortis pulvinar.
              Vivamus aliquet nisl neque, vitae consequat lorem efficitur vitae.
              Cras at tellus semper, imperdiet velit non, vulputate urna.
              Praesent ut eros vitae nunc dictum dignissim. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Sed sed felis tortor. Vestibulum vitae mi pellentesque, faucibus
              lectus id, rutrum nisl. Aliquam volutpat ligula eros. Morbi sed
              augue gravida, vehicula massa gravida, mattis quam. Aliquam
              bibendum nulla arcu, vitae euismod nunc dictum et.
            </Paragraph>
            <Paragraph classNames="text-2xl">
              Sed mattis congue enim, eget semper nunc porttitor ut. Donec ac
              sapien sit amet est eleifend placerat et vel neque. Donec rhoncus
              nibh non arcu faucibus, quis interdum magna cursus. Vestibulum
              convallis, sem id feugiat rutrum, nibh nunc efficitur arcu, ut
              scelerisque elit turpis vel purus. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. Nunc porttitor, tortor quis
              faucibus gravida, turpis sem suscipit est, eget pulvinar mauris
              ipsum quis ante.
            </Paragraph>
            <Paragraph classNames="text-2xl">
              Aenean quis nulla at nibh tristique egestas. Morbi convallis massa
              sed dui aliquet, lobortis cursus nibh luctus. Nulla vestibulum
              enim non magna rhoncus laoreet. Nulla sit amet semper velit. Nunc
              hendrerit accumsan lacus sed iaculis. Phasellus vehicula mi ac
              urna dignissim, vel vehicula mi auctor. Quisque porttitor tortor
              vitae ligula efficitur, vel pharetra quam maximus. Donec placerat
              facilisis ante, sit amet malesuada mauris molestie iaculis. Etiam
              sed bibendum orci. Vestibulum vitae nibh elementum mauris
              tincidunt facilisis. Cras scelerisque ex velit, ornare rhoncus leo
              suscipit ut. Quisque mollis, metus sed lobortis laoreet, turpis
              dolor porta augue, ac tempor purus arcu vel nisi.
            </Paragraph>
            <Paragraph classNames="text-2xl">
              Integer placerat nunc ac tellus vulputate ullamcorper. Nulla ut
              lectus condimentum mi varius pellentesque id eu ipsum. Vivamus
              venenatis, massa quis consequat volutpat, ante nulla dapibus dui,
              eget iaculis tortor nunc at augue. Nunc lorem ipsum, vulputate
              eget tellus eget, suscipit malesuada orci. Cras tincidunt dolor
              leo, non cursus risus vulputate at. Fusce et semper nunc, eget
              sodales odio. Vivamus vel lectus vitae urna lobortis pulvinar.
              Vivamus aliquet nisl neque, vitae consequat lorem efficitur vitae.
              Cras at tellus semper, imperdiet velit non, vulputate urna.
              Praesent ut eros vitae nunc dictum dignissim. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Sed sed felis tortor. Vestibulum vitae mi pellentesque, faucibus
              lectus id, rutrum nisl. Aliquam volutpat ligula eros. Morbi sed
              augue gravida, vehicula massa gravida, mattis quam. Aliquam
              bibendum nulla arcu, vitae euismod nunc dictum et.
            </Paragraph>
            <Paragraph classNames="text-2xl">
              Sed mattis congue enim, eget semper nunc porttitor ut. Donec ac
              sapien sit amet est eleifend placerat et vel neque. Donec rhoncus
              nibh non arcu faucibus, quis interdum magna cursus. Vestibulum
              convallis, sem id feugiat rutrum, nibh nunc efficitur arcu, ut
              scelerisque elit turpis vel purus. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. Nunc porttitor, tortor quis
              faucibus gravida, turpis sem suscipit est, eget pulvinar mauris
              ipsum quis ante.
            </Paragraph>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};
