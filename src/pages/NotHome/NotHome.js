import React, {useState, useEffect} from 'react';

const NotHome = () => {
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState('')
    const increment = () => setCounter(prev => prev + 1);
    const decrement = () => setCounter(prev => prev -1);

    useEffect(() => {
        if (counter < 0) {
            setCounter(0);
        }
        if (counter > 5) {
            setMessage('You passed 5!');
        } else {
            setMessage('');
        }
    }, [counter]);

    return (
        <div>
            <h1>This is the Not Home Page!</h1>
            <p>Counter: {counter}</p>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default NotHome;
