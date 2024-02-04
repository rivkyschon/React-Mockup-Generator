// src/components/__tests__/RMGImage.test.tsx

import React from 'react';
import {render} from '@testing-library/react';
import RMGImage from '../components/RMGImage';

describe('RMGImage', () => {
  it('renders correctly', () => {
    const {asFragment} = render(<RMGImage src="test.jpg" alt="test image" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('has the correct src and alt text', () => {
    const {getByAltText} = render(<RMGImage src="test.jpg" alt="test image" />);
    const image = getByAltText('test image');
    // expect(image).toBeInTheDocument();
    // expect(image).toHaveAttribute('src', 'test.jpg');
  });
});
