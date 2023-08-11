import React, { useEffect, useState } from 'react';
import { Alchemy, Network } from 'alchemy-sdk';
import Transaction from './Transaction';

const BlockDetail = ({ match }) => {
    const settings = {
        apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
        network: Network.ETH_MAINNET,
    };
    const alchemy = new Alchemy(settings);
    const [block, setBlock] = useState();
    const [transactions, setTransactions] = useState([]);
    console.log(block)
    // Fetch block details using blockNumber and display them
    useEffect(() => {
        // Fetch latest blocks
        alchemy.core.getBlock(parseInt(match.params.blockNumber)).then(setBlock);
        alchemy.core.getBlockWithTransactions().then(async (transaction) => {
            console.log(transaction)
            const latestTransactions = [];
            for (let i = 0; i < 5; i++) {
                latestTransactions.push(transaction.transactions[i]);
            }
            console.log(latestTransactions)
            setTransactions(latestTransactions)
        });
    }, []);

    return (
        <>
            {block ? (
                <div>
                    <h2>Block Detail - Block #{block.blockNumber}</h2>
                    <p>Hash: {block.hash}</p>
                    <p>Timestamp: {new Date(block.timestamp * 1000).toLocaleString()}</p>
                    {
                        transactions.map((transaction, index) => (
                            <Transaction key={index} transaction={transactions[index]} />
                        ))}
                </div>
            ) : (
                <p>Loading block details...</p>
            )}
        </>
    );
};

export default BlockDetail;
