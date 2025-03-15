import React from 'react';
import styled from 'styled-components';

export type ImgProps = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  disabled?: boolean;
};

const StyledImg = styled.img<{ disabled?: boolean }>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  object-fit: cover;
  border-radius: 5px;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled }) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      width={width}
      height={height}
      disabled={disabled}
    />
  );
};

export default Img;
