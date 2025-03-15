import React from 'react';  // ✅ Add this line
import { render, screen } from '@testing-library/react';
import Label from './Label';

test('renders label with correct text and input field', () => {
  render(
    <Label text="Test Label" htmlFor="test-input" placeholder="Type here" />,
  );
  expect(screen.getByText('Test Label')).toBeVisible();
  expect(screen.getByPlaceholderText('Type here')).toBeVisible();
});

test('label and input should be disabled when disabled prop is true', () => {
  render(
    <Label
      text="Disabled Label"
      htmlFor="disabled-input"
      placeholder="Can't type"
      disabled
    />,
  );
  const label = screen.getByText('Disabled Label');
  const input = screen.getByPlaceholderText("Can't type");

  expect(label).toHaveStyle('color: #aaa');
  expect(input).toHaveStyle('background-color: #f0f0f0');
  expect(input).toHaveStyle('cursor: not-allowed');
  expect(input).toBeDisabled();
});
