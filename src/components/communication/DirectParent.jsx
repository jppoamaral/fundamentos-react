import React from "react";
import DirectChild from "./DirectChild";

export default props => {
    return (
        <div>
            <DirectChild name='Joao' age={20} nerd={true} />
            <DirectChild name='Pedro' age={21} nerd={false} />
        </div>
    )
}