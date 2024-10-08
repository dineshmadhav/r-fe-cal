import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react';
import Calculator from './Calculator';


test('renders Calculator component', async () => {
    act(() => {
        render(<Calculator />);
    });
    const linkElement = screen.getByText(/Calculator/i);
    expect(linkElement).toBeInTheDocument();

});

test('renders Calculator component', async () => {
    await act(async () => {
      render(<Calculator />);
  
    const inputElement = screen.getByPlaceholderText('Enter string of numbers');
    const calculateButton = screen.getByRole('button');
    const resultElement = screen.getByText(/Result:/i);

    expect(inputElement).toHaveValue('');
    expect(resultElement).toHaveTextContent('0');

    userEvent.type(inputElement, '');
    userEvent.click(calculateButton);
    expect(resultElement).toHaveTextContent('0');

    });
  
  });
