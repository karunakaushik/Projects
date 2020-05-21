import React, {Component} from 'react';
import styles from './css/calc.module.css'


export default class ResultCalc extends Component{
    constructor(props){
        super();
    }
    render() {
        return(
            <div className={styles.outerbox}>
                <div className={styles.result}>
                   {this.props.result}
                </div>

            </div>
        )
    }
}