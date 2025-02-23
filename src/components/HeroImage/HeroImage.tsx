import React from "react";
import styled from "styled-components";

export type HeroImageProps = {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  disabled?: boolean;
};

const StyledHeroImage = styled.div<{ $imageUrl?: string; disabled?: boolean }>`
  width: 100%;
  height: 350px;
  background: ${({ $imageUrl }) => 
    $imageUrl ? `url(${$imageUrl}) center/cover no-repeat` : "#007bff"};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: black;
  opacity: ${({ disabled }) => (disabled ? "0.6" : "1")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const HeroContent = styled.div`
  background: rgba(0, 0, 0, 0.5); 
  padding: 20px;
  border-radius: 10px;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0;
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-top: 5px;
`;

const HeroImage: React.FC<HeroImageProps> = ({ title, subtitle, imageUrl, disabled }) => {
  return (
    <StyledHeroImage $imageUrl={imageUrl} disabled={disabled}>
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>
        {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}
      </HeroContent>
    </StyledHeroImage>
  );
};

export default HeroImage;
