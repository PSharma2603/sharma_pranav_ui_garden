import React from 'react';  // ✅ Add this line
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button with label', () => {
  render(<Button label="Test Button" />);
  expect(screen.getByText('Test Button')).toBeVisible();
});

test('changes color when disabled', () => {
  render(<Button label="Disabled Button" disabled />);
  expect(screen.getByText('Disabled Button')).toHaveStyle(
    'background-color: #ccc',
  );
});
