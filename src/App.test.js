import React from 'react';
import { render } from '@testing-library/react';
import { act as reactAct } from 'react';
import App from './App';
import Calculator from './components/Calculator';

describe('Renders Calculator component', () => {
  it('renders App component and Calculator component', () => {
    reactAct(() => {
      render(<App />);
      render(<Calculator />);
    })
  });
});
