import Paragraph, { ParagraphProps } from "./Paragraph";
import { Story, Meta } from "@storybook/react";
import Link from "next/link";

export default {
  title: "Components/Text/Paragraph",
  component: Paragraph,
} as Meta;

const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum egestas tempus. Praesent aliquam pulvinar hendrerit. Praesent semper egestas neque ut finibus. Etiam vitae turpis venenatis, egestas urna in, euismod arcu. Pellentesque nibh justo, efficitur a egestas vitae, scelerisque in nulla. Aliquam nunc felis, lobortis non dictum id, lobortis et ex. Pellentesque neque mauris, blandit quis urna eget, blandit scelerisque nisl. Quisque a enim nec ligula imperdiet posuere. Duis et lobortis turpis. Donec luctus vel elit sed congue. Cras vulputate rhoncus magna et iaculis. Quisque aliquam sed orci et accumsan. Nam viverra nisl purus, fermentum molestie ipsum lacinia vitae. Quisque eget mi vitae mauris efficitur maximus. Phasellus mi tortor, sodales sed tellus id, imperdiet tristique quam.",
};

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
  ...Default.args,
  classNames: "text-3xl",
};
