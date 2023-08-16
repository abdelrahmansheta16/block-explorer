import React, { useState, useEffect } from 'react';
import { Alchemy, Network } from 'alchemy-sdk';
import Block from './Block';
import { Link } from 'react-router-dom';

const BlockExplorer = () => {
    const settings = {
        apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
        network: Network.ETH_MAINNET,
    };
    const alchemy = new Alchemy(settings);
    const [blocks, setBlocks] = useState([]);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        // Fetch latest blocks
        alchemy.core.getBlockNumber().then(async (blockNumber) => {
            const latestBlocks = [];
            for (let i = 0; i < 5; i++) {
                const block = await alchemy.core.getBlock(blockNumber - i);
                console.log(block);
                latestBlocks.push(block);
            }
            setBlocks(latestBlocks);
        });

        // Fetch latest transactions
        alchemy.core.getLogs({ fromBlock: 'latest', toBlock: 'latest' }).then(setTransactions);
    }, []);

    return (
        <div className="block-explorer">
            <h1>Ethereum Block Explorer</h1>
            <Link to={"/lookup"}>Lookup Accounts Balances</Link>
            <div className="blocks">
                {blocks.map((block) => (
                    <Block key={block.number} block={block} />
                ))}
            </div>
        </div>
    );
};

export default BlockExplorer;
