import React from 'react';  // ✅ Add this line
import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';

test('renders radio buttons correctly', () => {
  render(<RadioButton name="cricketTeams" options={['India', 'Australia']} />);
  expect(screen.getByLabelText('India')).toBeVisible();
  expect(screen.getByLabelText('Australia')).toBeVisible();
});

test('radio button selection updates correctly', () => {
  render(<RadioButton name="cricketTeams" options={['India', 'Australia']} />);

  const indiaRadio = screen.getByLabelText('India');
  const australiaRadio = screen.getByLabelText('Australia');

  fireEvent.click(australiaRadio);
  expect(australiaRadio).toBeChecked();
  expect(indiaRadio).not.toBeChecked();
});

test('radio buttons are disabled when disabled prop is true', () => {
  render(
    <RadioButton
      name="cricketTeams"
      options={['India', 'Australia']}
      disabled
    />,
  );
  const indiaRadio = screen.getByLabelText('India');
  expect(indiaRadio).toBeDisabled();
});
