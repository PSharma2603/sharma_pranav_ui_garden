import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import TableRow, { TableRowProps } from "./TableRow";

export default {
  title: "Components/TableRow",
  component: TableRow,
  argTypes: {
    disabled: { control: "boolean" },
  },
} as Meta<typeof TableRow>;

const Template: StoryFn<TableRowProps> = (args) => (
  <table>
    <tbody>
      <TableRow {...args}>
        <td>Virat Kohli</td>
        <td>120</td>
        <td>0</td>
      </TableRow>
    </tbody>
  </table>
);

export const Default = Template.bind({});
Default.args = { disabled: false };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
