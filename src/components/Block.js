import React from 'react';
import { Link } from 'react-router-dom';

const Block = ({ block }) => {
    return (
        <Link to={`/block/${block.number}`}>
            <div className="block">
                <h2>Block {block.number}</h2>
                <p>Hash: {block.hash}</p>
                <p>Timestamp: {new Date(block.timestamp * 1000).toLocaleString()}</p>
            </div>
        </Link>
    );
};

export default Block;
