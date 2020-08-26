import React, { Component } from 'react'

export default class BaiTapQLSP extends Component {
    state = {
        sanPhamChiTiet : { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" }
    }

    renderSanPham = () => {
        return this.props.mangSP?.map((sanPham, index) => {
            return(
                <div className="col-3" key={index}>
                    <div className="card text-left" >
                        <img className="card-img-top" src={sanPham.hinhAnh} alt="" style={{height:200}} />
                        <div className="card-body">
                            <h4 className="card-title">{sanPham.tenSP}</h4>
                            <p className="card-text">{sanPham.giaBan}</p>
                            <button className="btn btn-success" onClick = {()=>{
                                    this.xemChiTiet(sanPham)
                                }
                            }>Chi tiết</button>
                        </div>
                    </div>
                </div>
            )    
        })
    }
    xemChiTiet = (spClick) =>{
        console.log('spClick',spClick);
        //setState cho sản phẩm chi tiết băng sản phẩm đc click
        this.setState({
            sanPhamChiTiet:spClick
        })
    }
    render() {
        let {maSP,tenSP,hinhAnh,manHinh,cameraTruoc,cameraSau,heDieuHanh,giaBan,ram,rom} = this.state.sanPhamChiTiet;
        return (
            <div className="container">
                <h3>Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <div className="row">
                    <div className="col-4">
                        <h3>{tenSP}</h3>
                        <img className="card-img-top" src={hinhAnh} alt={hinhAnh} style={{height:350}} />
                    </div>
                    <div className="col-8">
                        <h3>Thông Số Kỹ Thuật</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Màn Hình</th>
                                    <th>{manHinh}</th>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <th>{heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <th>{cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <th>{cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>ROM</th>
                                    <th>{ram}</th>
                                </tr>
                                <tr>
                                    <th>ROM</th>
                                    <th>{rom}</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
