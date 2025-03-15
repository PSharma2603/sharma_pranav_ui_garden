import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';

test('renders table header with content', () => {
  render(
    <table>
      <TableHeader>
        <tr>
          <th>🏏 Player</th>
        </tr>
      </TableHeader>
    </table>,
  );
  expect(screen.getByText('🏏 Player')).toBeVisible();
});

test('table header should be disabled when disabled prop is true', () => {
  render(
    <table>
      <TableHeader disabled>
        <tr>
          <th>🏏 Player</th>
        </tr>
      </TableHeader>
    </table>,
  );
  const header = screen.getByText('🏏 Player').parentElement;
  expect(header).toHaveStyle('opacity: 0.6');
  expect(header).toHaveStyle('cursor: not-allowed');
});
