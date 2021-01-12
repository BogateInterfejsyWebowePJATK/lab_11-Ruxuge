import React from 'react';
import './NumbersTable.css';

export default function NumbersTable({ numbers }) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <td>Dec</td>
                    <td>Bin</td>
                    <td>Oct</td>
                    <td>Hex</td>
                </tr>
            </thead>
            <tbody>
                {numbers.map(number => (
                    <tr>
                        <td>{number}</td>
                        <td>{number.toString(2)}</td>
                        <td>{number.toString(8)}</td>
                        <td>{number.toString(16)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
