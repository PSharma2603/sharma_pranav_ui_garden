import React from "react";
import styled from "styled-components";

export type TableFooterProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

const StyledTableFooter = styled.tfoot<{ $disabled?: boolean }>`
  background-color: ${({ $disabled }) => ($disabled ? "#ddd" : "#d1ecf1")};
  font-weight: bold;
  text-align: left;
  opacity: ${({ $disabled }) => ($disabled ? "0.6" : "1")};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "default")};
  transition: all 0.3s ease;
`;

const TableFooter: React.FC<TableFooterProps> = ({ children, disabled }) => {
  return <StyledTableFooter $disabled={disabled}>{children}</StyledTableFooter>;
};

export default TableFooter;
