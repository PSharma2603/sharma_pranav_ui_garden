import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Table from './Table';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Table>;

const Template: StoryFn<{ disabled: boolean }> = ({ disabled }) => (
  <Table disabled={disabled}>
    <thead>
      <tr>
        <th>🏏 Player</th>
        <th>🏆 Runs</th>
        <th>🎯 Wickets</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Virat Kohli</td>
        <td>120</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Jasprit Bumrah</td>
        <td>10</td>
        <td>3</td>
      </tr>
    </tbody>
  </Table>
);

export const Default = Template.bind({});
Default.args = { disabled: false };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
