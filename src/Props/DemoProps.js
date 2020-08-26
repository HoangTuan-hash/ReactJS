import React, { Component } from 'react'
import ThongTInSinhVien from './ThongTInSinhVien'

export default class DemoProps extends Component {
    sinhVien = {
        hoTen:'ABC',
        hinhAnh:'https://api.adorable.io/avatars/150/abott@adorable.png',
        lop: 'FE 49'
    }
    render() {
        return (
            <div className="container">
                <ThongTInSinhVien  sinhVien={this.sinhVien} />
            </div>
        )
    }
}
