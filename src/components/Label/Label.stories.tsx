import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Label, { LabelProps } from './Label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    type: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Label>;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Username',
  type: 'text',
  placeholder: 'Enter your username',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Username',
  type: 'text',
  placeholder: 'This input is disabled',
  disabled: true,
};
