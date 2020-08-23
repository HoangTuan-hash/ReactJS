import React, { Component } from 'react'
import Chil from './Chil'

export default class Styling extends Component {
    render() {
        return (
            <div>
                <h1 className="title">Chen scss</h1>
                <div className="test">Khong nhan scss tu component improt tu CHild</div>
                <Chil />
            </div>
        )
    }
}
