import React, { useEffect } from "react";
import styled from "styled-components";

export type LabelProps = {
  text: string;
  type?: string;
  placeholder?: string;
  htmlFor?: string;
  disabled?: boolean;
};

// ✅ Styled Label
const StyledLabel = styled.label<{ disabled?: boolean }>`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ disabled }) => (disabled ? "#aaa" : "#000")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: block;
  margin-bottom: 5px;
  transition: all 0.3s ease;
`;

// ✅ Styled Input Box
const StyledInput = styled.input<{ disabled?: boolean }>`
  width: 100%;
  max-width: 250px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: ${({ disabled }) => (disabled ? "#f0f0f0" : "white")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
  transition: all 0.3s ease;

  &:focus {
    outline: ${({ disabled }) => (disabled ? "none" : "2px solid #007bff")};
  }
`;

const Label: React.FC<LabelProps> = ({ text, type = "text", placeholder, htmlFor, disabled }) => {
  useEffect(() => {
    // ✅ Change the page background based on `disabled` state
    document.body.style.backgroundColor = disabled ? "#f0f0f0" : "white";

    // Cleanup function to reset background when component unmounts
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, [disabled]);

  return (
    <div>
      <StyledLabel htmlFor={htmlFor} disabled={disabled}>
        {text}
      </StyledLabel>
      <StyledInput type={type} id={htmlFor} placeholder={placeholder} disabled={disabled} />
    </div>
  );
};

export default Label;
