import { render, screen } from "@testing-library/react";
import TableCell from "./TableCell";

test("renders a normal table cell", () => {
  render(<table><tbody><tr><TableCell>🏏 Virat Kohli</TableCell></tr></tbody></table>);
  expect(screen.getByText("🏏 Virat Kohli")).toBeVisible();
});

test("renders a header table cell", () => {
  render(<table><thead><tr><TableCell isHeader>🏏 Player</TableCell></tr></thead></table>);
  expect(screen.getByText("🏏 Player")).toBeVisible();
  expect(screen.getByText("🏏 Player").tagName).toBe("TH");
});

test("table cell should be disabled when disabled prop is true", () => {
  render(<table><tbody><tr><TableCell disabled>🏏 Match Postponed</TableCell></tr></tbody></table>);
  const cell = screen.getByText("🏏 Match Postponed");
  expect(cell).toHaveStyle("background-color: #f0f0f0");
  expect(cell).toHaveStyle("color: #888");
  expect(cell).toHaveStyle("cursor: not-allowed");
});
