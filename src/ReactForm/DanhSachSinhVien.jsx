import React, { Component } from 'react'
import {connect} from 'react-redux'
import FormSinhVien from './FormSinhVien'
class DanhSachSinhVien extends Component {
    renderDanhSachSV = () =>{
        let {quanLySinhVien} = this.props;
        return quanLySinhVien.map((sinhVien,index)=>{
            return(
            <tr key={index}>
                <td>{sinhVien.maSinhVien}</td>
                <td>{sinhVien.tenSinhVien}</td>
                <td>{sinhVien.email}</td>
                <td>{sinhVien.soDienThoai}</td>
                <td>
                    <button className="btn btn-primary">Chỉnh sửa</button>
                    <button className="btn btn-danger">Xóa</button>
                </td>
            </tr>)
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <FormSinhVien />
                <table className="table bg-dark text-white">
                    <thead>
                        <tr>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderDanhSachSV()}
                        </tbody>
                </table>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        quanLySinhVien : state.QuanLySinhVienReducer.mangSinhVien
    }
}
export default connect(mapStateToProps)(DanhSachSinhVien)