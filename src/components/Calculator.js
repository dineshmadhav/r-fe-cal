import React, { useState } from 'react';
import './Calculator.css'

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
        setResult(0);
        setErrorMessage('');
    };

    const handleCalculate = () => {
        try {
            const sumOfNumbers = add(input);
            setResult(sumOfNumbers);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const add = (numbers) => {
        if (numbers === '' && numbers == null) return 0;

        const negativeNumbers = [];
        const doubleSlash = '//';
        numbers = numbers.replace(/\\n/g, '\n');
        const delimiters = new RegExp(`[${doubleSlash},/;\n:. ']`);
        const numArray = numbers.split(delimiters).map(num => parseInt(num));
        let sumOfnumArray = numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num),0);

        numArray.forEach(num => {
            if (num < 0) negativeNumbers.push(num);
        });

        if (negativeNumbers.length > 0) {
            throw new Error(`negative numbers not allowed: ${negativeNumbers.join(', ')}`);
        }

        return sumOfnumArray;
    };

    return (
        <div className="cal-container">
            <h1>String Calculator</h1>
            <input className='cal-input' type="text" placeholder='Enter string of numbers' value={input} onChange={handleInputChange} />
            <button className='cal-button' onClick={handleCalculate}>Calculate</button>
            <p className="result">
                <span style={{ paddingRight: '8px' }}>Result:</span>
                <span data-testid="result" className='results-total'>{isNaN(result) ? '0' : result.toString()}</span></p>
            <p className="error-message">{errorMessage}</p>
        </div>
    );
}


export default Calculator;