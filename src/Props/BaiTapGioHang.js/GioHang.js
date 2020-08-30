import React, { Component } from 'react'

export default class GioHang extends Component {
    renderGioHang = () =>{
        return this.props.gioHang?.map((spGH,index)=>{
            return <tr key={index}>
            <td>{spGH.maSP}</td>
            <td>
                <img src={spGH.hinhAnh} style={{width:100}}/>
            </td>
            <td>
                {spGH.tenSP}
            </td>
            <td>
               {spGH.giaBan}
            </td>
            <td>
                <button className="btn btn-primary" onClick={()=>{
                    this.props.tangGiamSoLuong(spGH.maSP,true)
                }}>+</button>
                {spGH.soLuong}
                <button className="btn btn-primary" onClick={()=>{
                    this.props.tangGiamSoLuong(spGH.maSP,false)
                }}>-</button>
            </td>
            <td>
            {spGH.giaBan*spGH.soLuong}
            </td>
            <td>
                <button className="btn btn-danger" onClick={()=>
                this.props.xoaGioHang(spGH.maSP)}>Xóa</button>
            </td>
        </tr>
        })
    }
    render() {
        return (
            <div>
                {/* Button trigger modal */}
                
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ hàng title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <th>Mã</th>
                                        <th>Hình ảnh</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Số lượng</th>
                                        <th>Đơn giá</th>
                                        <th>Thành tiền</th>
                                    </thead>
                                    <tbody>
                                        {this.renderGioHang()}
                                    </tbody>
                                </table>
                                <tfoot>
                                    <tr>
                                        <td colSpan="5">

                                        </td>
                                        <td>
                                            Thành tiền
                                        </td>
                                        <td>
                                            {
                                                this.props.gioHang.reduce((tongTien, spGH, index) =>{
                                                    return tongTien += spGH.giaBan * spGH.soLuong
                                                },0).toLocaleString()
                                            }
                                        </td>
                                    </tr>
                                </tfoot>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
