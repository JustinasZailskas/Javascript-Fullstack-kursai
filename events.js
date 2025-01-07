import React, { useState } from 'react';

// Pavyzdys 1: onClick įvykis
function ButtonClick() {
    const [message, setMessage] = useState('');

    const handleClick = () => {
        setMessage('Button was clicked!');
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            <p>{message}</p>
        </div>
    );
}

export { ButtonClick };


function InputChange() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange} placeholder="Type something..." />
            <p>You typed: {inputValue}</p>
        </div>
    );
}

// Pavyzdys 2: onChange įvykis

export { InputChange };

// Pavyzdys 3: Formos pateikimo įvykis

function FormSubmit() {
    const [name, setName] = useState('');
    const [submittedData, setSubmittedData] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Užkerta kelią numatytam formos pateikimui
        setSubmittedData({name});
    };

    return (
        <form onSubmit={handleSubmit} >
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter your name" 
            />
            <button type="submit">Submit</button>
            {submittedData && <p>Submitted Name: {submittedData.name}</p>}
        </form>
    );
}

export { FormSubmit };

// Pavyzdys 4: Alternatyva įvykių valdymui (Inline funkcijos)

function InlineEvents() {
    const [color, setColor] = useState('blue');
    const [backgourndColor, setBackgourndColor] = useState('white');
    const width = '100%';

    return (
        <div>
            <button onClick={() => setColor('red')}>Set Red</button>
            <button onClick={() => setColor('green')}>Set Green</button>
            <hr/>
            <button onClick={() => setBackgourndColor('red')}>Set BG Red</button>
            <button onClick={() => setBackgourndColor('green')}>Set BG Green</button>

            <p style={{ color, 'background-color': backgourndColor , width}}>The current color is {color}.</p>
        </div>
    );
}

export { InlineEvents };


// Pavyzdys 5: Kelių įvykių valdymas

function MultipleEvents() {
    const [hovered, setHovered] = useState(false);

    return (
        <div>
            <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                Hover Over Me
            </button>
            <p>{hovered ? 'You are hovering!' : 'Hover over the button to see the message.'}</p>
        </div>
    );
}

export { MultipleEvents };