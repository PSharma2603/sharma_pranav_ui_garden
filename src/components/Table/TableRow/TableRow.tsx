import React from 'react';
import styled from 'styled-components';

export type TableRowProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

// ✅ Use `$disabled` to avoid DOM errors
const StyledTableRow = styled.tr<{ $disabled?: boolean }>`
  &:nth-child(even) {
    background-color: ${({ $disabled }) => ($disabled ? '#f0f0f0' : '#f2f2f2')};
  }
  opacity: ${({ $disabled }) => ($disabled ? '0.6' : '1')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'default')};
  transition: all 0.3s ease;
`;

const TableRow: React.FC<TableRowProps> = ({ children, disabled }) => {
  return <StyledTableRow $disabled={disabled}>{children}</StyledTableRow>;
};

export default TableRow;
