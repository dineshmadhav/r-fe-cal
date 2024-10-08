import React, { useState } from 'react';

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
        if (numbers === '') {
            return 0;
        }
    
    }

    return (
        <div>
            <h1>String Calculator</h1>
            <input className='cal-input-elm' type="text" placeholder='Enter string of numbers' value={input} onChange={handleInputChange} />
            <button className='cal-button' onClick={handleCalculate}>Calculate</button>
            <p>Result: {result}</p>
            <p>{errorMessage}</p>
        </div>
    );
}


export default Calculator;