import React, { useState, useEffect } from 'react';
import './App.css';

import NumbersList from "./components/NumbersList/NumbersList";
import NumbersTable from "./components/NumbersTable/NumbersTable";

export default function App() {
    const [numbers, setNumbers] = useState([]);
    const [isTable, setIsTable] = useState(false);

    const roll = () => {
        for (let i = 0; i < 10; i++) {
            // Create table of rands: 0-99
            setNumbers(prev => [...prev, Math.floor((Math.random() * 1000) / 10)]);
        }
    }

    const reroll = () => {
        setNumbers([]);
        roll();
    }

    const showTable = () => {
        setIsTable(!isTable);
    }

    const del = (index) => {
        if (index > -1) {
            numbers.splice(index, 1)
            setNumbers(numbers => numbers.filter(element => element !== index))
        }
    }

    const buttonTitle = () => isTable ? 'Hide Table' : 'Show Table';

    useEffect(() => roll(), []);

  return (
    <div className="App">
        {isTable && <NumbersTable
            numbers={numbers}
        />}
        {!isTable && <NumbersList
            numbers={numbers}
            del={del}
            />}
        <button onClick={reroll}>Re-rand</button>
        <button onClick={showTable}>{buttonTitle()}</button>
    </div>
  );
}
