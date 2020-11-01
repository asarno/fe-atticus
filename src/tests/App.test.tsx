import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Testing Example', () => {
  const { getByText } = render(<App />);
  expect(true).toBeTruthy();
});
