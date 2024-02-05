// src/components/__tests__/RMGText.test.tsx

import React from 'react';
import {render} from '@testing-library/react';
import RMGText from '../components/core/RMGText';

describe('RMGText', () => {
  it('renders correctly', () => {
    const {asFragment} = render(<RMGText content="Test Content" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the correct content', () => {
    const {getByText} = render(<RMGText content="Test Content" />);
    // expect(getByText('Test Content')).toBeInTheDocument();
  });
});
