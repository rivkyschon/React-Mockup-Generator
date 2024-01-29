import React from 'react';
import { render, screen } from '@testing-library/react';
import RMGHeader from '../components/RMGHeader';

test('renders RMGHeader with text', () => {
  render(<RMGHeader text="Test Header" />);
  expect(screen.getByText('Test Header')).toBeInTheDocument();
});
