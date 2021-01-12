import React/*, {useState, useEffect}*/ from 'react';
import './NumbersList.css';

import ListItem from "../ListItem/ListItem";

export default function NumbersList({ numbers, del }) {
    return (
        <article className='numbers-list-component'>
            <ul className='numbers-list numbers-list-font'>
                {numbers.map((number, key) => (
                    <ListItem
                        randomNumber={number}
                        key={`id-${key}`}
                        del={del}
                        index={numbers.indexOf(number)}>
                    </ListItem>
                ))}
            </ul>
        </article>
    );
}
