import React, { useState } from 'react';

const ComposeInterest = () => {
    const [principal, setPrincipal] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [days, setDays] = useState(0);
    const [result, setResult] = useState(null);
    const [resultImposition, setResultImposition] = useState(null);

    const calculateInterest = () => {
        const dailyInterestRate = interestRate / 100 / 365;
        let totalAmount = principal;

        for (let day = 1; day <= days; day++) {
            totalAmount += totalAmount * dailyInterestRate;
        }

        const totalInterest = totalAmount - principal;
        setResult(totalInterest.toFixed(2));
    };

    const calculateImposition = () => {
        const taxRate = 30; // Taux d'imposition fixe de 30%
        const taxAmount = result - (result * taxRate) / 100; // Calcul de l'impôt
        setResultImposition(taxAmount.toFixed(2));
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
            <h2>Compound Interest Calculator</h2>
            <div>
                {thisInput("Principal Amount", "number", principal, (e) => setPrincipal(parseFloat(e.target.value)))}
                {thisInput("Interest Rate (%)", "number", interestRate, (e) => setInterestRate(parseFloat(e.target.value)))}
                {thisInput("Days", "number", days, (e) => setDays(parseInt(e.target.value)))}
                <button onClick={calculateInterest}>Calculate</button>
            </div>

            {result && (
                <div>
                    <h3>Total Interest: {result} tokens</h3>
                </div>
            )}
            <div>
                <button onClick={calculateImposition}>Calculate Imposition</button>
                {resultImposition && (
                    <div>
                        <h3>Stay: {resultImposition} $</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ComposeInterest;
