// src/components/__tests__/RMGButton.test.tsx

import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import RMGButton from '../components/core/RMGButton';

describe('RMGButton', () => {
  it('renders correctly', () => {
    const {asFragment} = render(<RMGButton title="Click Me" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the correct title', () => {
    const {getByText} = render(<RMGButton title="Click Me" />);
    // expect(getByText('Click Me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    const {getByText} = render(
      <RMGButton title="Click Me" onClick={handleClick} />,
    );
    fireEvent.click(getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
