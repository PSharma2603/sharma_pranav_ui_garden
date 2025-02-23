import React from "react";
import styled from "styled-components";

export type TableCellProps = {
  children: React.ReactNode;
  isHeader?: boolean;
  disabled?: boolean;
};

const StyledTableCell = styled.td<{ isHeader?: boolean; disabled?: boolean }>`
  font-weight: ${({ isHeader }) => (isHeader ? "bold" : "normal")};
  background-color: ${({ disabled }) => (disabled ? "#f0f0f0" : "transparent")};
  color: ${({ disabled }) => (disabled ? "#888" : "black")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 0.9rem; /* ✅ Reduce font size on smaller screens */
  }

  @media (max-width: 480px) {
    padding: 6px;
    font-size: 0.85rem; /* ✅ Further reduce font size for very small screens */
  }
`;

const TableCell: React.FC<TableCellProps> = ({ children, isHeader, disabled }) => {
  return <StyledTableCell as={isHeader ? "th" : "td"} isHeader={isHeader} disabled={disabled}>{children}</StyledTableCell>;
};

export default TableCell;
