import React, { Component } from 'react'
// import SanPham from '../SanPham';

export default class SanPhamGioHang extends Component {
    render() {
        let {sp,themGioHang} = this.props;
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={sp.hinhAnh} style={{height:350}} alt="./img/sp_note7.jpg" />
                    <div className="card-body">
                        <h4 className="card-title">{sp.tenSP}</h4>
                        <p className="card-text">{sp.giaBan.toLocaleString()}</p>
                        <button className="btn btn-success" onClick={
                            ()=>{
                                themGioHang(sp)
                            }
                        }>Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}
