import React, { useState, useEffect } from 'react';
import { Alchemy, Network } from 'alchemy-sdk';
import { useParams } from 'react-router-dom';

const TransactionDetails = () => {
    const settings = {
        apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
        network: Network.ETH_MAINNET,
    };
    const alchemy = new Alchemy(settings);
    const { transactionHash } = useParams();
    const [transaction, setTransaction] = useState(null);
    console.log(transaction)
    useEffect(() => {
        // Fetch transaction details
        alchemy.core.getTransaction(transactionHash).then(setTransaction);
    }, [transactionHash]);

    return (
        <div>
            {transaction ? (
                <div>
                    <h2>Transaction Detail - Hash: {transactionHash}</h2>
                    <p>From: {transaction.from}</p>
                    <p>To: {transaction.to}</p>
                    <p>Amount: {transaction.value._hex}</p>
                    {/* Display more transaction details */}
                </div>
            ) : (
                <p>Loading transaction details...</p>
            )}
        </div>
    );
};

export default TransactionDetails;
