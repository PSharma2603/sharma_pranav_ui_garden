import { render, screen } from "@testing-library/react";
import Card from "./Card";
import worldCup from "../../assets/World_cup.jpg";

test("renders card with title and description", () => {
  render(<Card title="Test Title" description="Test Description" />);
  expect(screen.getByText("Test Title")).toBeVisible();
  expect(screen.getByText("Test Description")).toBeVisible();
});

test("renders card with an image", () => {
  render(<Card title="Card with Image" description="Has an image" imageUrl={worldCup} />);
  const img = screen.getByRole("img");
  expect(img).toHaveAttribute("src", worldCup);
});

test("renders disabled card correctly", () => {
  render(<Card title="Disabled Card" description="This is disabled" disabled />);
  const card = screen.getByText("Disabled Card").parentElement;
  expect(card).toHaveStyle("background-color:rgb(35, 105, 151)");
  expect(card).toHaveStyle("cursor: not-allowed");
  expect(card).toHaveStyle("opacity: 0.6");
});
