import React, { useState } from 'react';
import './App.css'; 

const CurrencyConverter = () => {
    const [amount, setAmount] = useState('');
    const [convertedAmount, setConvertedAmount] = useState('');
    const exchangeRate = 0.85; // 1 USD = 0.85 EUR (Replace with actual exchange rate)
    
    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const convertCurrency = () => {
        const result = parseFloat(amount) * exchangeRate;
        setConvertedAmount(result.toFixed(2));
    };

    return (
        <div className="currency-converter-container">
            <h1 className="converter-title">Currency Converter</h1>
                <div className="input-container"> 
                    <label htmlFor="amount" className="label-text"> 
                        Enter Amount in USD: 
                    </label> 
                    <input  
                        type="number" 
                        id="amount" 
                        value={amount} 
                        onChange={handleAmountChange} 
                        className="input-field" 
                    /> 
                    </div> 
                    <div className="button-container"> 
                        <button onClick={convertCurrency} className="convert-button">  
                            Convert 
                        </button> 
                    </div> 
                    {convertedAmount && ( 
                        <div className="result-container"> 
                            <p className="result-text">Converted Amount: 
                {convertedAmount} EUR</p> 
                        </div> 
                    )} 
                </div> 
            ); 
        }; 
        
        function App() { 
            return ( 
                <div className="app-container"> 
                    <CurrencyConverter /> 
                </div> 
            ); 
        } 
export default App;