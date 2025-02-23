import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Card, { CardProps } from "./Card";
import worldCup from "../../assets/World_cup.jpg"; // Example local image

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    imageUrl: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof Card>;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Cricket World Cup Victory",
  description: "India wins the 2024 Cricket World Cup!",
  imageUrl: worldCup, // Using local image
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: "Cricket World Cup Victory",
  description: "This card is disabled",
  imageUrl: worldCup,
  disabled: true,
};
