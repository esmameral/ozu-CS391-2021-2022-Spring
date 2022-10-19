import React, { useState, useEffect } from 'react';
import './styles.css';

const LifeCycles = () => {
    const [count, setCount] = useState(0);
    const [intervalActive, setIntervalActive] = useState(false);
    let [buttonText, setButtonText] = useState('Activate Intervals');

    const manageInterval = () => {
        setButtonText(intervalActive ? buttonText = 'Activate Intervals' : buttonText = 'Deactivate intervals');

        setIntervalActive(!intervalActive);
    }

    useEffect(() => {
        // console.log('useEffect log from IntervalCounter.js');
        if (intervalActive) {
            const interval = setInterval(() => {
                //console.log('interval executes');
                setCount(count => count + 1)
            }, 1000)
            return () => {
                //console.log('unmounts');
                clearInterval(interval)
            }
        }
    }, [intervalActive])

    return (
        <div className="container">
            <p className="count-text">{count}</p>
            <button onClick={manageInterval} type="button">
                {buttonText}
            </button>
        </div>
    )
}

export default LifeCycles;