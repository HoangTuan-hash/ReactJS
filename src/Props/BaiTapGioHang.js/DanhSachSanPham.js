import React, { Component } from 'react'
import SanPhamGioHang from './SanPhamGioHang'

export default class DanhSachSanPham extends Component {
    renderSP = () => {
        return this.props.mangSanPham.map((sanPham, index) => {
            return (
                <div className="col-4" key={index}>
                    <SanPhamGioHang sp={sanPham} themGioHang={this.props.themGioHang} />
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                <div className="row">
                    {this.renderSP()}
                </div>
            </div>

        )
    }
}
