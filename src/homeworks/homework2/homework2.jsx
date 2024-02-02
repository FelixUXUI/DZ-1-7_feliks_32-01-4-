import React, {useState} from 'react';
import List from "./List.jsx";

function Homework2() {

    return (
        <div>
            <List array={[
                {
                    id:1 ,
                    task: 'coding'
                },
                {
                    id:2,
                    task: 'eat'
                },
                {
                    id:3,
                    task: 'sleep'
                },
                {
                    id:4,
                    task: 'sleep'
                },
                {
                    id:5,
                    task: 'sleep'
                }
            ]}/>
        </div>
    );
}

export default Homework2;