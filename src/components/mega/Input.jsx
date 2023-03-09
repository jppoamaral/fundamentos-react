import React from "react";

export default props => {
    return (
        <div>
            <lable htmlFor="AmtInput">Quantidade: </lable>
            <input 
                id="AmtInput"
                type="number"
                value={props.amt}
                onChange={e => props.setAmt(+e.target.value)}
            />
        </div>
    )
}