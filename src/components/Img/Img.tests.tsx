import { render, screen } from "@testing-library/react";
import Img from "./Img";
import exampleImage from "../../assets/ipl.jpeg";

test("renders image with correct attributes", () => {
  render(<Img src={exampleImage} alt="Test Image" width="300px" height="200px" />);
  const img = screen.getByRole("img");
  expect(img).toHaveAttribute("src", exampleImage);
  expect(img).toHaveAttribute("alt", "Test Image");
  expect(img).toHaveAttribute("width", "300px");
  expect(img).toHaveAttribute("height", "200px");
});

test("image has correct styles when disabled", () => {
  render(<Img src={exampleImage} alt="Disabled Image" disabled />);
  const img = screen.getByRole("img");
  expect(img).toHaveStyle("opacity: 0.5");
  expect(img).toHaveStyle("cursor: not-allowed");
});
