import React, { useState } from 'react';
import styled from 'styled-components';

export type DropdownProps = {
  options: string[];
  selectedOption?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
};

const StyledSelect = styled.select<{ disabled?: boolean }>`
  width: 100%;
  max-width: 250px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: ${({ disabled }) => (disabled ? 'black' : 'lightblue')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;

  &:focus {
    outline: ${({ disabled }) => (disabled ? 'none' : '2px solid #007bff')};
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  onChange,
  disabled,
}) => {
  const [selected, setSelected] = useState(selectedOption || options[0]); // ✅ Maintain selected state

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelected(newValue); // ✅ Update state
    if (onChange) {
      onChange(newValue); // ✅ Call parent function if provided
    }
  };

  return (
    <StyledSelect value={selected} onChange={handleChange} disabled={disabled}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
