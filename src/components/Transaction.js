import React from 'react';
import { Link } from 'react-router-dom';

const Transaction = ({ transaction }) => {
    console.log(transaction)
    return (
        <Link to={`/transaction/${transaction.hash}`}>
            <div className="transaction">
                <h3>Transaction</h3>
                <p>Hash: {transaction.hash}</p>
                <p>From: {transaction.from}</p>
                <p>To: {transaction.to}</p>
            </div>
        </Link>
    );
};

export default Transaction;