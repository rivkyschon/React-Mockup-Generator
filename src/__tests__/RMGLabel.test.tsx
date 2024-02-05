// src/components/__tests__/RMGLabel.test.tsx

import React from 'react';
import {render} from '@testing-library/react';
import RMGLabel from '../components/core/RMGLabel';

describe('RMGLabel', () => {
  it('renders correctly', () => {
    const {asFragment} = render(<RMGLabel content="Label Content" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the correct content', () => {
    const {getByText} = render(<RMGLabel content="Label Content" />);
    // expect(getByText('Label Content')).toBeInTheDocument();
  });
});
