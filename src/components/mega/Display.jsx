import React from "react";

export default props => {
    const numbersList = props.numbers.map((number) =>
        <div>{number}</div>
    );
    return (
        <div className="Numbers">{numbersList}</div>
    )
}