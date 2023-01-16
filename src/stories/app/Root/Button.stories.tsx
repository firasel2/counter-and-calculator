import Button from "../../../app/counter/Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "App/Root",
  component: Button,
  argTypes: {
    text: { control: "text" },
    color: { control: { type: "select", options: ["primary", "secondary"] } },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Control_Button = Template.bind({});

Control_Button.args = {
  color: "primary",
  text: "+",
};
