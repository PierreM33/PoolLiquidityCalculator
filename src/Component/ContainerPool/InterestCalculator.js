import React, { useState } from 'react';
import InformationsCalcul from "./InformationsCalcul";

const InterestCalculator = () => {
    const [dailyAmount, setDailyAmount] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [days, setDays] = useState(0);
    const [result, setResult] = useState(null);

    const calculateInterest = () => {
        const dailyInterestRate = interestRate / 100 / 365;
        let totalInterest = 0;
        let totalAmount = 0;

        for (let day = 1; day <= days; day++) {
            totalAmount += dailyAmount;
            totalInterest += totalAmount * dailyInterestRate;
            totalAmount += totalAmount * dailyInterestRate; // add interest to total amount
        }

        setResult(totalInterest.toFixed(2));
    };

    const thisInput = (label, type, value, onChange) => {
        return (
            <div>
                <label>{label}:</label>
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    step="0.01" // Allows decimal inputs
                />
            </div>
        );
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Interest Calculator</h2>
            {thisInput("Daily Amount", "number", dailyAmount, (e) => setDailyAmount(parseFloat(e.target.value)))}
            {thisInput("Interest Rate", "number", interestRate, (e) => setInterestRate(parseFloat(e.target.value)))}
            {thisInput("Days", "number", days, (e) => setDays(parseInt(e.target.value)))}
            <button onClick={calculateInterest}>Calculate</button>

            {result && (
                <div>
                    <h3>Total Interest: {result} tokens</h3>
                </div>
            )}

            {result && dailyAmount > 0 && interestRate > 0 && days > 0 && (
                <InformationsCalcul dailyAmount={dailyAmount} interestRate={interestRate} days={days} />
            )}
        </div>
    );
};

export default InterestCalculator;
