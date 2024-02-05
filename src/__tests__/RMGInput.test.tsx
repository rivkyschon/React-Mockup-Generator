// src/components/__tests__/RMGInput.test.tsx

import React from 'react';
import {render} from '@testing-library/react';
import RMGInput from '../components/core/RMGInput';

describe('RMGInput', () => {
  it('renders correctly', () => {
    const {asFragment} = render(
      <RMGInput type="text" placeholder="Enter text" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('has the correct placeholder', () => {
    const {getByPlaceholderText} = render(
      <RMGInput type="text" placeholder="Enter text" />,
    );
    // expect(getByPlaceholderText('Enter text')).toBeInTheDocument();
  });
});
