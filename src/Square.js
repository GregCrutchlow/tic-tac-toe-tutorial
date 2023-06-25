import React from "react";

export default function Square({ value }) {

    function handleClick() {
        console.log('Clicked!');
    }
    return <button className="square" onClick={handleClick}>{value}</button>
}