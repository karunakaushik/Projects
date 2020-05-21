import React, {Component} from 'react';
import styles from './css/calc.module.css'
import ResultCalc from './calcResult';
import Keypad from './keypad';

export default class Calculator extends Component{

    constructor(props){
        super()

        this.state={
            result : ''
        }

    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

    calculate = () => {
        try{
            this.setState({
                result: (eval(this.state.result) || '') + ''
            })
        }
        catch(e){
            this.setState({
                result: "error"
                
            })
        }

    };

    reset = () => {
        this.setState({
            result : ''
        })
    }

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    }

    render() {
        return(
            <div className={styles.calc}>
             <h1 className={styles.heading}>React Calculator</h1>
             <ResultCalc result = {this.state.result} />
             <Keypad onClick = {this.onClick} />
            </div>
        )
    }
}