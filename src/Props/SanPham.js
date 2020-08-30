import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let sanPham = this.props.sp;
        return (
            <div className="card text-left" >
                <img className="card-img-top" src={sanPham.hinhAnh} alt="" style={{ height: 350 }} />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.giaBan}</p>
                    <button className="btn btn-success" onClick={() => {
                        this.props.xemChiTiet(sanPham)
                    }
                    }>Chi tiết</button>
                </div>
         </div>
        )
    }
}
