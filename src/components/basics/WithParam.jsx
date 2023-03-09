import React from "react"
export default function WithParameter(props) {
    console.log(props)
    const status = props.temperature >= 0 ? '' : ', it is freezing'
    return (
        <div>
            <h2>{props.title}</h2>
            <p>
                <strong>{props.city}</strong>
                (<strong>{props.country}</strong>)
            </p>
            <p>
                The Temperature is
                <strong> {props.temperature}</strong>
                {status}
            </p>
        </div>
    )
}