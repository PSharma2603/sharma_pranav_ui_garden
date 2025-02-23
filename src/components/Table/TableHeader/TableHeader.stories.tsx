import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import TableHeader, { TableHeaderProps } from "./TableHeader";

export default {
  title: "Components/TableHeader",
  component: TableHeader,
  argTypes: {
    disabled: { control: "boolean" },
  },
} as Meta<typeof TableHeader>;

const Template: StoryFn<TableHeaderProps> = (args) => (
  <table>
    <TableHeader {...args}>
      <tr>
        <th>🏏 Player</th>
        <th>🏆 Runs</th>
        <th>🎯 Wickets</th>
      </tr>
    </TableHeader>
  </table>
);

export const Default = Template.bind({});
Default.args = { disabled: false };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
