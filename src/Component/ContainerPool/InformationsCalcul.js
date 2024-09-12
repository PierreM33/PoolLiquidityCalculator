import React from 'react';

const InformationsCalcul = ({ dailyAmount, interestRate, days }) => {
    const dailyInterestRate = interestRate / 100 / 365;
    let totalAmount = 0;
    let totalInterest = 0;

    const rows = [];

    for (let day = 1; day <= days; day++) {
        totalAmount += dailyAmount; // Ajoute le montant quotidien
        const interestForDay = totalAmount * dailyInterestRate; // Calcule l'intérêt pour le jour
        totalInterest += interestForDay; // Ajoute l'intérêt au total
        totalAmount += interestForDay; // Met à jour le montant total avec l'intérêt

        rows.push({
            day,
            dailyAmount: dailyAmount.toFixed(2),
            interestForDay: interestForDay.toFixed(2),
            totalAmount: totalAmount.toFixed(2),
        });
    }

    return (
        <div className="container">
            <table className="table">
                <thead>
                <tr>
                    <th className="cell">Day</th>
                    <th className="cell">Daily Amount</th>
                    <th className="cell">Interest for Day</th>
                    <th className="cell">Total Amount</th>
                </tr>
                </thead>
                <tbody>
                {rows.map((row) => (
                    <tr key={row.day}>
                        <td className="cell">{row.day}</td>
                        <td className="cell">{row.dailyAmount}</td>
                        <td className="cell">{row.interestForDay}</td>
                        <td className="cell">{row.totalAmount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default InformationsCalcul;
