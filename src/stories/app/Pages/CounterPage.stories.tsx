import RootLayout from "../../../app/layout";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Counter from "../../../app/counter/page";

export default {
  title: "App/Pages",
  component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => {
  return (
    <RootLayout>
      <Counter />
    </RootLayout>
  );
};

export const Counter_Page = Template.bind({});
