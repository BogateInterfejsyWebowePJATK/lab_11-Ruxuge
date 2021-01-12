import React, { useState, useEffect } from 'react';
import './ListItem.css';

export default function ListItem({ randomNumber, del, index }) {

    const [value, setValue] = useState(randomNumber);

    useEffect(() => setValue(randomNumber), [randomNumber]);

    const toBin = () => setValue(randomNumber.toString(2));

    const toOct = () => setValue(randomNumber.toString(8));

    const toDec = () => setValue(randomNumber);

    const toHex = () => setValue(randomNumber.toString(16));

    return (
        <li>
            <div className='list-item'>
                <p>{value}</p>
                <div className="buttons">
                    <button onClick={() => del(index)}>Delete</button>
                    <button onClick={toBin}>Bin</button>
                    <button onClick={toOct}>Oct</button>
                    <button onClick={toDec}>Dec</button>
                    <button onClick={toHex}>Hex</button>
                </div>
            </div>
        </li>
    );
}
