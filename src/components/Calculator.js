import React, { useState } from 'react';

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');


    return (
        <div>
            <h1>String Calculator</h1>
            <input type="text" value={input} onChange={()=>{}} />
            <button onClick={()=>{}}>Calculate</button>
            <p>Result: {result}</p>
            <p>{errorMessage}</p>
        </div>
    );
}


export default Calculator;