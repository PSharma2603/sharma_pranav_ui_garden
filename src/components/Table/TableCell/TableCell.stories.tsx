import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TableCell, { TableCellProps } from './TableCell';

export default {
  title: 'Components/TableCell',
  component: TableCell,
  argTypes: {
    isHeader: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof TableCell>;

const Template: StoryFn<TableCellProps> = (args) => (
  <table>
    <tbody>
      <tr>
        <TableCell {...args} />
      </tr>
    </tbody>
  </table>
);

export const Default = Template.bind({});
Default.args = {
  children: '🏏 Virat Kohli',
  isHeader: false,
  disabled: false,
};

export const HeaderCell = Template.bind({});
HeaderCell.args = {
  children: '🏏 Player',
  isHeader: true,
  disabled: false,
};

export const DisabledCell = Template.bind({});
DisabledCell.args = {
  children: '🏏 Match Postponed',
  isHeader: false,
  disabled: true,
};
