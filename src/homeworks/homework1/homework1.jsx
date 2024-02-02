import React from 'react';
import Button from "./Button.jsx";
import Header from "./Header.jsx";
import Button2 from "./Button2.jsx";

function Homework1() {
    const text = "Text through props"

    return (
        <div>
            <Header/>
            <h1>Hello</h1>
            <Button content="Text through props"/>
            <Button content={text} content2="Text 2"/>
            <Button2/>
        </div>
    );
}

export default Homework1;