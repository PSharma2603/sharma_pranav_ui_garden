import React, { useState } from 'react';
import styled from 'styled-components';

export type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
};

const StyledButton = styled.button<{ clicked: boolean }>`
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled, clicked }) =>
    disabled ? '#ccc' : clicked ? 'red' : '#007bff'};
  color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled, clicked }) =>
      disabled ? '#ccc' : clicked ? 'darkred' : '#0056b3'};
  }
`;

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      setClicked(true);
      if (onClick) {
        onClick();
      }
    }
  };

  return (
    <StyledButton onClick={handleClick} disabled={disabled} clicked={clicked}>
      {label}
    </StyledButton>
  );
};

export default Button;
