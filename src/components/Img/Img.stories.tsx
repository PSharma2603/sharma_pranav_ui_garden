import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Img, { ImgProps } from "./Img";
import exampleImage from "../../assets/ipl.jpeg";

export default {
  title: "Components/Img",
  component: Img,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof Img>;

const Template: StoryFn<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: exampleImage,
  alt: "Example Image",
  width: "300px",
  height: "200px",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: exampleImage,
  alt: "Disabled Image",
  width: "300px",
  height: "200px",
  disabled: true,
};
