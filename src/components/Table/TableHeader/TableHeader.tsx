import React from 'react';
import styled from 'styled-components';

export type TableHeaderProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

const StyledTableHeader = styled.thead<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#007bff')};
  color: white;
  font-weight: bold;
  text-align: left;
  opacity: ${({ disabled }) => (disabled ? '0.6' : '1')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  transition: all 0.3s ease;
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children, disabled }) => {
  return <StyledTableHeader disabled={disabled}>{children}</StyledTableHeader>;
};

export default TableHeader;
