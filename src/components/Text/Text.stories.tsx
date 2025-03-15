import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Text, { TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    text: { control: 'text' },
    fontSize: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Text>;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "🏏 'Cricket is life, everything else is just a game!'",
  fontSize: '1.5rem',
  color: 'green',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "🏏 'Match postponed due to rain...'",
  fontSize: '1.5rem',
  color: 'gray',
  disabled: true,
};
