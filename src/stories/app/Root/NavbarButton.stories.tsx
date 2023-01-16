import NavbarButton from "../../../app/NavbarButton";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "App/Root",
  component: NavbarButton,
  argTypes: {
    text: { control: "text" },
    color: { control: { type: "select", options: ["primary", "secondary"] } },
  },
} as ComponentMeta<typeof NavbarButton>;

const Template: ComponentStory<typeof NavbarButton> = (args) => (
  <NavbarButton {...args} />
);

export const Navbar_Button = Template.bind({});

Navbar_Button.args = {
  color: "primary",
  text: "Counter",
  route: "",
};
