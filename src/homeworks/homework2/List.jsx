import React from 'react';
import Button from "./Button.jsx";

function List({array}) {
    return (
        <ul>
            {array.map(item => (
                <li key={item.id}>
                    <p>key={item.id}, task: {item.task}</p>
                    <Button/>
                </li>
            ))}
        </ul>
    );
}

export default List;