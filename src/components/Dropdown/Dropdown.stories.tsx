import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Dropdown, { DropdownProps } from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    options: { control: "object" }, // ✅ Fix: Use "object" instead of "array"
    selectedOption: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof Dropdown>;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  selectedOption: "Option 1",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  selectedOption: "Option 2",
  disabled: true,
};
