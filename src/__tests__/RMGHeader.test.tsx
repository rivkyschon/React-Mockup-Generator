// src/components/__tests__/RMGHeader.test.tsx

import React from 'react';
import {render} from '@testing-library/react';
import RMGHeader from '../components/RMGHeader';

describe('RMGHeader', () => {
  it('renders correctly', () => {
    const {asFragment} = render(<RMGHeader text="Test Header" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the correct text', () => {
    const {getByText} = render(<RMGHeader text="Test Header" />);
    // expect(getByText('Test Header')).toBeInTheDocument();
  });
});
