import NumberButton from "../../../app/calculator/NumberButton";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "App/Root",
  component: NumberButton,
  argTypes: {
    text: { control: "text" },
    color: {
      control: {
        type: "select",
        options: ["primary-shadow", "secondary-shadow"],
      },
    },
  },
} as ComponentMeta<typeof NumberButton>;

const Template: ComponentStory<typeof NumberButton> = (args) => (
  <NumberButton {...args} />
);

export const Number_Button = Template.bind({});

Number_Button.args = {
  color: "primary-shadow",
  text: "5",
};
