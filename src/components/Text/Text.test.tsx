import React from 'react';  // ✅ Add this line
import { render, screen } from '@testing-library/react';
import Text from './Text';


test('renders text with correct content', () => {
  render(<Text text="🏏 Cricket is the heartbeat of millions!" />);
  expect(
    screen.getByText('🏏 Cricket is the heartbeat of millions!'),
  ).toBeVisible();
});

test('text should be disabled when disabled prop is true', () => {
  render(<Text text="🏏 Match postponed due to rain..." disabled />);
  const textElement = screen.getByText('🏏 Match postponed due to rain...');
  expect(textElement).toHaveStyle('color: #aaa');
  expect(textElement).toHaveStyle('cursor: not-allowed');
});
