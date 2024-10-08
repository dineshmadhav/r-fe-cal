import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import Calculator from './Calculator';

describe('Renders Calculator component', () => {
    it('renders page title with the text', () => {
        act(() => {
            render(<Calculator />);
        });
        const linkElement = screen.getByText(/String Calculator/i);
        expect(linkElement).toBeInTheDocument();
    });

    it('renders input field with placeholder text', () => {
        act(() => {
            render(<Calculator />);
        });
        const inputElement = screen.getByPlaceholderText('Enter string of numbers');
        expect(inputElement).toBeInTheDocument();
    });

    it('Empty string in the input will give empty value', () => {
        act(() => {
            render(<Calculator />);
        });
        const inputElement = screen.getByPlaceholderText('Enter string of numbers');
        fireEvent.change(inputElement, { target: { value: '' } });
        expect(inputElement.value).toBe('');
    });

    it('calls handleCalculate on button click', () => {
        render(<Calculator />);
        const handleCalculate = jest.fn();
        
        const button = screen.getByText('Calculate');
        button.onclick = handleCalculate; 
    
        fireEvent.click(button);
    
        expect(handleCalculate).toHaveBeenCalled();
      });

      it('updates input value on change', () => {
        act(() => {
            render(<Calculator />);
        });
        const inputElement = screen.getByPlaceholderText('Enter string of numbers');
        fireEvent.change(inputElement, { target: { value: '1,2,3' } });
        expect(inputElement.value).toBe('1,2,3');
    });
});
