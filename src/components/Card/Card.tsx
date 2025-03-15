import React from 'react';
import styled from 'styled-components';

export type CardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  disabled?: boolean;
};

const StyledCard = styled.div<{ disabled?: boolean }>`
  width: 100%;
  max-width: 300px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${({ disabled }) =>
    disabled ? 'none' : '2px 2px 10px rgba(0, 0, 0, 0.1)'};
  text-align: center;
  background-color: ${({ disabled }) => (disabled ? 'black' : 'white')};
  opacity: ${({ disabled }) => (disabled ? '0.6' : '1')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  disabled,
}) => {
  return (
    <StyledCard disabled={disabled}>
      {imageUrl && <CardImage src={imageUrl} alt={title} />}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
