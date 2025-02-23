import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import HeroImage, { HeroImageProps } from "./HeroImage";
import heroImageExample from "../../assets/image.jpg"; // Example image

export default {
  title: "Components/HeroImage",
  component: HeroImage,
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    imageUrl: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof HeroImage>;

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Welcome to My Website",
  subtitle: "Discover amazing experiences",
  imageUrl: heroImageExample, // Using a local image
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: "Hero Image Disabled",
  subtitle: "This section is currently inactive",
  imageUrl: heroImageExample,
  disabled: true,
};
