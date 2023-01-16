import RootLayout from "../../../app/layout";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Calculator from "../../../app/calculator/page";

export default {
  title: "App/Pages",
  component: Calculator,
} as ComponentMeta<typeof Calculator>;

const Template: ComponentStory<typeof Calculator> = (args) => {
  return (
    <RootLayout>
      <Calculator />
    </RootLayout>
  );
};

export const Calculator_Page = Template.bind({});
