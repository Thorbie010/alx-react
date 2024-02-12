import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders Login component without crashing', () => {
  render(<Login />);
});

test('renders 2 input tags and 2 label tags in Login component', () => {
  render(<Login />);
  const inputElements = screen.getAllByRole('textbox');
  const labelElements = screen.getAllByRole('textbox');

  expect(inputElements).toHaveLength(2);
  expect(labelElements).toHaveLength(2);
});
