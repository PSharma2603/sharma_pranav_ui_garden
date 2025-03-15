import React from 'react';  // ✅ Add this line
import { render, screen } from '@testing-library/react';
import TableRow from './TableRow';

test('renders table row with content', () => {
  render(
    <table>
      <tbody>
        <TableRow>
          <td>🏏 Virat Kohli</td>
        </TableRow>
      </tbody>
    </table>,
  );
  expect(screen.getByText('🏏 Virat Kohli')).toBeVisible();
});

test('table row should be disabled when disabled prop is true', () => {
  render(
    <table>
      <tbody>
        <TableRow disabled>
          <td>🏏 Match Postponed</td>
        </TableRow>
      </tbody>
    </table>,
  );
  const row = screen.getByText('🏏 Match Postponed').parentElement;
  expect(row).toHaveStyle('opacity: 0.6');
  expect(row).toHaveStyle('cursor: not-allowed');
});
