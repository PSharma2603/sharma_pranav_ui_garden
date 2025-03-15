import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders dropdown with correct options', () => {
  render(<Dropdown options={['Apple', 'Banana', 'Cherry']} />);
  expect(screen.getByText('Apple')).toBeVisible();
  expect(screen.getByText('Banana')).toBeVisible();
  expect(screen.getByText('Cherry')).toBeVisible();
});

test('dropdown changes selection when clicked', () => {
  const handleChange = jest.fn();
  render(
    <Dropdown
      options={['Apple', 'Banana', 'Cherry']}
      onChange={handleChange}
    />,
  );
  fireEvent.change(screen.getByRole('combobox'), {
    target: { value: 'Banana' },
  });
  expect(handleChange).toHaveBeenCalledWith('Banana');
});

test('dropdown has correct styles when disabled', () => {
  render(<Dropdown options={['Apple', 'Banana', 'Cherry']} disabled />);
  const dropdown = screen.getByRole('combobox');
  expect(dropdown).toHaveStyle('background-color:rgb(55, 48, 153)');
  expect(dropdown).toHaveStyle('cursor: not-allowed');
});
