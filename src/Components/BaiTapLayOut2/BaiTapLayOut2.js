import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import Carousel from './Carousel'
import SmartPhone from './SmartPhone'
import Laptop from './Laptop'
import Promotion from './Promotion'

export default class BaiTapLayOut2 extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <Carousel />
                <SmartPhone />
                <Laptop />
                <Promotion />
            </div>
        )
    }
}
