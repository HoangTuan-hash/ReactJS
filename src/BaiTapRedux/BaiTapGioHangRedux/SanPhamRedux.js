import React, { Component } from 'react'
//Kết nối Redux
import {connect} from 'react-redux'



class SanPhamRedux extends Component {
    render() {
        let {sanPham} = this.props;
        return (
            <div className="card">
                <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh} style={{height:350}}/>
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.gia.toLocaleString()}</p>
                    <button className="btn btn-success" onClick={()=>{
                        this.props.themGioHang(sanPham);
                    }}>Thêm sản phẩm</button>

                </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {//dispatch là hàm giống hàm setState
    return{
        themGioHang:(sanPhamClick) => {
            console.log('sanPhamClick',sanPhamClick);
            const action = {
                type: 'THEM_GIO_HANG', //đây là thuộc tính bắt buộc
                sanPham : sanPhamClick //Nội dung đưa lên store của rudex
            }
            //Dùng hàm dispatch gửi action lên redux
            dispatch(action);
        }
    }
}

export default connect(null,mapDispatchToProps)(SanPhamRedux)
