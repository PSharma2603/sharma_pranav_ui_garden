import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import RadioButton, { RadioButtonProps } from "./RadioButton";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    options: { control: "object" },
    selectedOption: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof RadioButton>;

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "cricketTeams",
  options: ["India 🇮🇳", "Australia 🇦🇺", "England 🏴", "Pakistan 🇵🇰"],
  selectedOption: "India 🇮🇳",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: "cricketTeams",
  options: ["India 🇮🇳", "Australia 🇦🇺", "England 🏴", "Pakistan 🇵🇰"],
  selectedOption: "Australia 🇦🇺",
  disabled: true,
};
