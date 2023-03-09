import React from "react";

export default (props) => {
    const { min, max } = props
    const num = parseInt(Math.random() * (max - min)) + min
    console.log(num)
    return (
        <div>
            <p>A random number between {min} and {max} is: {num}</p>
        </div>
    )
}