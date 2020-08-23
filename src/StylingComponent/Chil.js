import React, { Component } from 'react';
//cach 1
import "./Styling.scss";
//cach 2
import style from './Styling.module.scss'
export default class Chil extends Component {
    render() {
        return (
            <div>
                <div className={`${style.test}`}>
                    chil component
                    <p className={`${style.text}`}>2222222222222222</p>
                    <p style={{ borderColor: 'red', background: 'pink', fontSize: '20px' }}>
                        Demo
                    </p>
                </div>
                <div className={style.text}>AAAAAAAAAAAA</div>
            </div>

        )
    }
}
