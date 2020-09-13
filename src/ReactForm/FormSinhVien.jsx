import React, { Component } from 'react'
import{connect} from 'react-redux'
import {themSinhVienAction} from '../redux/action/QuanLySinhVienAction'

class FormSinhVien extends Component {
    state = {
        values:{
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: '',
        },

        errors:{
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: '',
        }
    }

    handleChangeInput = (event) => {//event: là sự kiện trên control gọi hàm này khi onchange
        let { value, name} = event.target;

        let type = event.target.getAttribute('type_');//lấy ra 1 giá trị do thuộc tính do ta tự định nghĩa

        let newValues = this.state.values;
        newValues = {
            ...newValues,[name]:value,
        }


        let newErros = {...this.state.errors, [name]:value.trim() === ''? `${name} không được bỏ trống!` : ''};

        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
        if(type === 'email'){
            if(!regexEmail.test(value)){
                newErros[name] = 'Email không hợp lệ !'
            }
        }

        this.setState({
            values: newValues,
            errors: newErros
        }, () => {
            console.log(this.state);
        });

    }
    hanleSubmit = (event) => {
        event.preventDefault();//Chặn sự điều kiện submit của trình duyệt
        //vadlidation
        let valid = true;
        //nếu value = rỗng || lỗi khác rổng thì không hợp lệ
        for (let key in this.state.values){
            if(this.state.values[key].trim() === ''){
                valid = false;
            }
        }
        for (let key in this.state.errors){
            if(this.state.errors[key].trim() !== ''){
                valid = false;
            }
        }
        if(!valid){
            alert('Dữ liệu không hợp lệ');
            return;
        }
        //them sinh vien
        const action = themSinhVienAction(this.state.values);
        //dùng props.dispatch có sẵn khi liên kết với redux sẽ có props này => dispatch action lên reducer
        this.props.dispatch(action);

    }
    render() {
        return (
            <form className="container-fluid" onSubmit={this.hanleSubmit}>
                <div className="card">
                    <div className="card-header text-white bg-dark font-weight-bold" >
                        Thông tin sinh viên
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Mã sinh viên</p>
                                    <input className="form-control" name="maSinhVien" onChange={this.handleChangeInput} />
                                    <p className="text-danger" >{this.state.errors.maSinhVien}</p>
                                </div>
                                <div className="form-group">
                                    <p>Tên sinh viên</p>
                                    <input className="form-control" name="tenSinhVien" onChange={this.handleChangeInput} />
                                    <p className="text-danger" >{this.state.errors.tenSinhVien}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Email</p>
                                    <input type_="email" className="form-control" name="email" onChange={this.handleChangeInput} />
                                    <p className="text-danger" >{this.state.errors.email}</p>
                                </div>
                                <div className="form-group">
                                    <p>Số điện thoại</p>
                                    <input type_="phone" className="form-control" name="soDienThoai" onChange={this.handleChangeInput} />
                                    <p className="text-danger" >{this.state.errors.soDienThoai}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-right">
                                <button type="submit" className="btn btn-success">Thêm sinh viên</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
const mapDispatchToProps = () => {

}

export default connect(null)(FormSinhVien)