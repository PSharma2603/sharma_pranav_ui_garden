import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import TableFooter, { TableFooterProps } from "./TableFooter";

export default {
  title: "Components/TableFooter",
  component: TableFooter,
  argTypes: {
    disabled: { control: "boolean" },
  },
} as Meta<typeof TableFooter>;

const Template: StoryFn<TableFooterProps> = (args) => (
  <table>
    <TableFooter {...args}>
      <tr>
        <td>Total</td>
        <td>200</td>
        <td>5</td>
      </tr>
    </TableFooter>
  </table>
);

export const Default = Template.bind({});
Default.args = { disabled: false };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
