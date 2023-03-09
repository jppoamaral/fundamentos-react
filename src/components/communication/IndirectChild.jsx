import React from "react";

export default props => {
    const cb = props.whenToClick
    const generateAge = () => parseInt(Math.random() * (20)) + 50
    const generateNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>
                filho
            </div>
            <button onClick={ e => { cb('Wagner', generateAge(), generateNerd()) }
            }>
                Provide Info
                </button>
        </div>
    )
}
