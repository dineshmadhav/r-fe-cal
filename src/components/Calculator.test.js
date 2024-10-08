import { render, screen } from '@testing-library/react';
import { act } from 'react';
import Calculator from './Calculator';


test('renders Calculator component', () => {
    act(() => {
        render(<Calculator />);
    });
    const linkElement = screen.getByText(/Calculator/i);
    expect(linkElement).toBeInTheDocument();
});
