import Input from "../../../app/calculator/Input";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "App/Root",
  component: Input,
  argTypes: {
    setStateValue: { control: "text" },
    color: {
      control: {
        type: "select",
        options: ["primary-border", "secondary-border"],
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState<Number>(0);
  return <Input {...args} setStateValue={setValue} />;
};

export const Form_Input = Template.bind({});

Form_Input.args = {
  color: "primary-border",
};
