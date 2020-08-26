import React, { Component } from 'react'

export default class ThongTInSinhVien extends Component {
    //this.props: là thuộc tính có sẵn của component. lưu ý: dùng để nhận giá trị từ component cha truyền vào, và không thay đổi được giá đó
    render() {
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" src={this.props.sinhVien.hinhAnh} alt="" style={{ width: '100%}}' }} />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.sinhVien.hoTen}</h4>
                        <p className="card-text">{this.props.sinhVien.lop}</p>
                    </div>
                </div>
            </div>

        )
    }
}
