import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Scott Logic tagline', () => {
  render(<App />);
  const tagline = screen.getByTestId("tagline").innerHTML;
  expect(tagline).toBe("ALTOGETHER SMARTER");
});
