import React, { useState } from 'react';
import styled from 'styled-components';

export type RadioButtonProps = {
  name: string;
  options: string[];
  selectedOption?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
};

// ✅ Fix: Explicitly define `$disabled` in Styled Components
const StyledRadioButton = styled.div<{ $disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input[type='radio'] {
    cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  }

  label {
    font-size: 1rem;
    cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
    color: ${({ $disabled }) => ($disabled ? '#aaa' : '#000')};
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  options,
  selectedOption,
  onChange,
  disabled,
}) => {
  const [selected, setSelected] = useState(selectedOption || '');

  const handleChange = (value: string) => {
    if (!disabled) {
      setSelected(value); // ✅ Update state internally
      if (onChange) {
        onChange(value); // ✅ Call parent function if provided
      }
    }
  };

  return (
    <StyledRadioButton $disabled={disabled}>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={name}
            value={option}
            checked={selected === option}
            onChange={(e) => handleChange(e.target.value)}
            disabled={disabled}
          />
          {option}
        </label>
      ))}
    </StyledRadioButton>
  );
};

export default RadioButton;
