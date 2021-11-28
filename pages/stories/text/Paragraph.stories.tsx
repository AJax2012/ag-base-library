import Paragraph, { ParagraphProps } from "./Paragraph";
import { Story, Meta } from "@storybook/react";
import Link from "next/link";
import { ThemeProvider } from "next-themes";

export default {
  title: "Components/Text/Paragraph",
  component: Paragraph,
} as Meta;

const Template: Story<ParagraphProps> = (args) => (
  <ThemeProvider forcedTheme="light" enableSystem={false}>
    <Paragraph {...args} />
  </ThemeProvider>
);

export const Light = Template.bind({});
Light.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum egestas tempus. Praesent aliquam pulvinar hendrerit. Praesent semper egestas neque ut finibus. Etiam vitae turpis venenatis, egestas urna in, euismod arcu. Pellentesque nibh justo, efficitur a egestas vitae, scelerisque in nulla. Aliquam nunc felis, lobortis non dictum id, lobortis et ex. Pellentesque neque mauris, blandit quis urna eget, blandit scelerisque nisl. Quisque a enim nec ligula imperdiet posuere. Duis et lobortis turpis. Donec luctus vel elit sed congue. Cras vulputate rhoncus magna et iaculis. Quisque aliquam sed orci et accumsan. Nam viverra nisl purus, fermentum molestie ipsum lacinia vitae. Quisque eget mi vitae mauris efficitur maximus. Phasellus mi tortor, sodales sed tellus id, imperdiet tristique quam.",
};

export const Dark: Story<ParagraphProps> = (args) => (
  <ThemeProvider forcedTheme="dark" enableSystem={false}>
    <Paragraph {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum
      egestas tempus. Praesent aliquam pulvinar hendrerit. Praesent semper
      egestas neque ut finibus. Etiam vitae turpis venenatis, egestas urna in,
      euismod arcu. Pellentesque nibh justo, efficitur a egestas vitae,
      scelerisque in nulla. Aliquam nunc felis, lobortis non dictum id, lobortis
      et ex. Pellentesque neque mauris, blandit quis urna eget, blandit
      scelerisque nisl. Quisque a enim nec ligula imperdiet posuere. Duis et
      lobortis turpis. Donec luctus vel elit sed congue. Cras vulputate rhoncus
      magna et iaculis. Quisque aliquam sed orci et accumsan. Nam viverra nisl
      purus, fermentum molestie ipsum lacinia vitae. Quisque eget mi vitae
      mauris efficitur maximus. Phasellus mi tortor, sodales sed tellus id,
      imperdiet tristique quam.
    </Paragraph>
  </ThemeProvider>
);

export const Hyperlinks = Template.bind({});
Hyperlinks.args = {
  children: (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
      <Link href="#">
        <a className="hover:underline text-blue-400">Here is a hyperlink</a>
      </Link>
      . Praesent aliquam pulvinar hendrerit. Praesent semper egestas neque ut
      finibus. Etiam vitae turpis venenatis, egestas urna in, euismod arcu.
      Pellentesque nibh justo, efficitur a egestas vitae, scelerisque in nulla.
      Aliquam nunc felis, lobortis non dictum id, lobortis et ex. Pellentesque
      neque mauris, blandit quis urna eget, blandit scelerisque nisl. Quisque a
      enim nec ligula imperdiet posuere. Duis et lobortis turpis. Donec luctus
      vel elit sed congue. Cras vulputate rhoncus magna et iaculis. Quisque
      aliquam sed orci et accumsan. Nam viverra nisl purus, fermentum molestie
      ipsum lacinia vitae. Quisque eget mi vitae mauris efficitur maximus.
      Phasellus mi tortor, sodales sed tellus id, imperdiet tristique quam.
    </>
  ),
};

export const Large = Template.bind({});
Large.args = {
  ...Light.args,
  classNames: "text-3xl",
};
