import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RMGInput from '../components/RMGInput';

describe('RMGInput', () => {
  test('renders input with placeholder', () => {
    render(<RMGInput placeholder="Enter text" type='text'/>);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  test('handles value changes', () => {
    const handleChange = jest.fn();
    render(<RMGInput type='text' />);
  });
});
