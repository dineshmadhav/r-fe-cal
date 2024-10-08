import { render, screen } from '@testing-library/react';
import { act } from 'react';
import App from './App';
import Calculator from './components/Calculator';

test('renders learn react link', () => {
  act(() => {
    render(<App />);
    render(<Calculator />);
  })
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
