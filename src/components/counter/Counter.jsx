import "./Counter.css";
import React, { Component } from "react";

import Display from "./Display";
import Buttons from "./Buttons";
import PassForm from "./PassForm";

class Counter extends Component {

    state = {
        num: this.props.initialNum || 0,
        pass: this.props.initialPass || 5,
    }

    inc = () => {
        this.setState({
            num: this.state.num + this.state.pass,
        });
    }

    dec = () => {
        this.setState({
            num: this.state.num - this.state.pass,
        });
    }

    setPass = (newPass) => {
        this.setState({
            pass: newPass,
        })
    }

    render() {
        return (
            <div className="Counter">
                <h2>Counter</h2>
                <Display num={this.state.num}/>
                <PassForm pass={this.state.pass} setPass={this.setPass}/>
                <Buttons setInc={this.inc} setDec={this.dec}/>
            </div>
        )
    }
}

export default Counter;