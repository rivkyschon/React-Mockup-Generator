import React from 'react';
import { render, screen } from '@testing-library/react';
import RMGImage from '../components/RMGImage';

test('renders RMGImage with correct src and alt text', () => {
  const altText = 'A sample image';
  render(<RMGImage src="https://via.placeholder.com/150" alt={altText} />);
  const image = screen.getByAltText(altText);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', 'https://via.placeholder.com/150');
});
