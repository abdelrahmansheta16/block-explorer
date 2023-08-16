// src/components/AccountLookup.js
import React, { useState } from 'react';
import { Alchemy, Network, Utils } from 'alchemy-sdk';

const AccountLookup = () => {
    const settings = {
        apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
        network: Network.ETH_MAINNET,
    };
    const alchemy = new Alchemy(settings);
    const [address, setAddress] = useState('');
    const [balance, setBalance] = useState('');

    const getBalance = async () => {
        if (!alchemy.core.lookupAddress(address)) {
            alert('Invalid Ethereum address');
            return;
        }

        const weiBalance = await alchemy.core.getBalance(address);
        const etherBalance = Utils.formatEther(weiBalance);
        setBalance(etherBalance);
    };

    return (
        <div>
            <h2>Account Lookup</h2>
            <input
                type="text"
                placeholder="Enter Ethereum address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <button onClick={getBalance}>Get Balance</button>
            <p>Balance: {balance} ETH</p>
        </div>
    );
};

export default AccountLookup;
