import React from 'react';
import { render, screen } from '@testing-library/react';
import RMGText from '../components/RMGText';

test('renders RMGText with content', () => {
  render(<RMGText content="Sample text" />);
  expect(screen.getByText('Sample text')).toBeInTheDocument();
});
