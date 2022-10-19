import React, { useReducer }  from 'react';
import './styles.css';

const initialState = { count: 10 };
const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
};


const ReducerHook = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const handleIncrease = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const handleDecrease = () => {
        dispatch({ type: 'DECREMENT' });
    };
    return (
        <div className="container">
            <h1 className="counter-title">Counter</h1>
            <p className="counter">Count: {state.count}</p>

            <div className="buttons">
                <button className="btn" onClick={handleIncrease}>Increase +</button>
                <button className="btn" onClick={handleDecrease}>Decrease -</button>
            </div>
        </div>
    );
}

export default ReducerHook;