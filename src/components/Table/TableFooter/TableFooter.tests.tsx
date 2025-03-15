import { render, screen } from '@testing-library/react';
import TableFooter from './TableFooter';

test('renders table footer with content', () => {
  render(
    <table>
      <TableFooter>
        <tr>
          <td>Total</td>
        </tr>
      </TableFooter>
    </table>,
  );
  expect(screen.getByText('Total')).toBeVisible();
});

test('table footer should be disabled when disabled prop is true', () => {
  render(
    <table>
      <TableFooter disabled>
        <tr>
          <td>Total</td>
        </tr>
      </TableFooter>
    </table>,
  );
  const footer = screen.getByText('Total').parentElement;
  expect(footer).toHaveStyle('opacity: 0.6');
  expect(footer).toHaveStyle('cursor: not-allowed');
});
