import React from 'react';  // ✅ Add this line
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';
import heroImageExample from '../../assets/hero_example.jpg';

test('renders Hero Image with title and subtitle', () => {
  render(<HeroImage title="Test Hero" subtitle="This is a subtitle" />);
  expect(screen.getByText('Test Hero')).toBeVisible();
  expect(screen.getByText('This is a subtitle')).toBeVisible();
});

test('renders Hero Image with a background image', () => {
  render(
    <HeroImage
      title="Hero with Image"
      subtitle="Image should appear"
      imageUrl={heroImageExample}
    />,
  );
  const heroImage = screen.getByText('Hero with Image').parentElement;
  expect(heroImage).toHaveStyle(
    `background: url(${heroImageExample}) center/cover no-repeat`,
  );
});

test('Hero Image should change background when disabled', () => {
  render(
    <HeroImage title="Disabled Hero" subtitle="This is disabled" disabled />,
  );
  const heroImage = screen.getByText('Disabled Hero').parentElement;
  expect(heroImage).toHaveStyle('opacity: 0.6');
  expect(heroImage).toHaveStyle('cursor: not-allowed');
});
