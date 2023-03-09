import "./Mega.css";
import React from "react";

import Input from "./Input";
import Button from "./Button";
import Display from "./Display";

class Mega extends React.Component {

    state = {
        amt: this.props.initialAmt || 5,
        arr: []
    }

    setAmt = (newAmt) => {
        this.setState({
            amt: newAmt,
        });
    }

    generateNumber = () => {
        const element = parseInt(Math.random() * (60)) + 1;
        return this.state.arr.includes(element) ? this.generateNumber() : element;
    }

    generateNumbers = () => {
        let aux_arr = []
        for (let i = 0; i < this.state.amt; i++) {
            aux_arr.push(this.generateNumber());
        }
        this.setState({ arr: aux_arr, });
    }

    render() {
        return (
            <div className="Mega">
                <h2>Lottery Numbers</h2>
                <Input amt={this.state.amt} setAmt={this.setAmt} />   {/* input para quantidade de numeros */}
                <Button genNum={this.generateNumbers} />   {/* botão para gerar os numeros */}
                <Display numbers={this.state.arr.sort((n1, n2) => n1 - n2)} /> {/* numeros gerados */}
            </div>
        );
    };
}

export default Mega;