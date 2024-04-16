import React, { useState, useRef } from 'react'; 
import './App.css'; 

function App() { 
    const [time, setTime] = useState(0); 
    const [isRunning, setIsRunning] = useState(false); 
    const timerRef = useRef(); 
    const startTimer = () => { 
        if (!isRunning) { 
            timerRef.current = setInterval(() => { 
                setTime((prevTime) => prevTime + 1); 
            }, 1000); 
            setIsRunning(true); 
        } 
    }; 
    
    const pauseTimer = () => { 
        clearInterval(timerRef.current); 
        setIsRunning(false); 
    }; 
    
    const resetTimer = () => { 
        clearInterval(timerRef.current);
        setTime(0); 
        setIsRunning(false); 
    }; 
    
    return ( 
        <div className="stopwatch-container"> 
        <h1>Stopwatch</h1> 
        <div className="timer">{formatTime(time)}</div> 
        <div className="controls"> 
        <button onClick={startTimer} disabled={isRunning}> 
            Start 
        </button> 
        
        <button onClick={pauseTimer} disabled={!isRunning}> 
            Pause 
        </button> 
        <button onClick={resetTimer}>
            Reset
        </button>
    </div> 
</div> 
); 
} 

function formatTime(seconds) { 
    const minutes = Math.floor(seconds / 60); 
    const remainingSeconds = seconds % 60; 
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`; 
} 
export default App;