import React from "react";
import styled from "styled-components";

export type TableProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ disabled }) => (disabled ? "#f0f0f0" : "white")};
  opacity: ${({ disabled }) => (disabled ? "0.6" : "1")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  transition: all 0.3s ease;

  th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Table: React.FC<TableProps> = ({ children, disabled }) => {
  return <StyledTable disabled={disabled}>{children}</StyledTable>;
};

export default Table;
