import React from 'react';
import styled from 'styled-components';

export type TextProps = {
  text: string;
  fontSize?: string;
  color?: string;
  disabled?: boolean;
};

const StyledText = styled.p<{
  fontSize?: string;
  color?: string;
  disabled?: boolean;
}>`
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  color: ${({ color, disabled }) => (disabled ? '#aaa' : color || 'black')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  font-family: 'CricketBold', sans-serif; /* Cricket-themed font */
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Text: React.FC<TextProps> = ({ text, fontSize, color, disabled }) => {
  return (
    <StyledText fontSize={fontSize} color={color} disabled={disabled}>
      {text}
    </StyledText>
  );
};

export default Text;
