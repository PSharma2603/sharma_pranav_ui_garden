import React from 'react'; // ✅ Add this line
import { render, screen } from '@testing-library/react';
import Table from './Table';

test('renders table with cricket players', () => {
  render(
    <Table>
      <thead>
        <tr>
          <th>Player</th>
          <th>Runs</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Virat Kohli</td>
          <td>120</td>
        </tr>
      </tbody>
    </Table>,
  );
  expect(screen.getByText('Virat Kohli')).toBeVisible();
  expect(screen.getByText('120')).toBeVisible();
});

test('table should be disabled when disabled prop is true', () => {
  render(
    <Table disabled>
      <thead>
        <tr>
          <th>Player</th>
          <th>Runs</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Virat Kohli</td>
          <td>120</td>
        </tr>
      </tbody>
    </Table>,
  );
  const table = screen.getByRole('table');
  expect(table).toHaveStyle('opacity: 0.6');
  expect(table).toHaveStyle('cursor: not-allowed');
});
