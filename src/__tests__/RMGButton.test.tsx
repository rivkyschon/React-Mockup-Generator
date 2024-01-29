import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RMGButton from '../components/RMGButton';

describe('RMGButton', () => {
  test('renders correctly', () => {
    render(<RMGButton title="Click Me" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('handles click events', () => {
    const handleClick = jest.fn();
    render(<RMGButton title="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
